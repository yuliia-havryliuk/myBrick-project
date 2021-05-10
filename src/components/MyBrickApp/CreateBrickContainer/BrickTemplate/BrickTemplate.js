import React, { useState } from 'react';
import bricksAction from '../../../../redux/actions';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import s from './BrickTemplate.module.css';
import EncodeBase64 from './EncodeBase64';

// const EncodeBase64 = () => {
//   const [selectedFiles, setSelectedFile] = useState([]);
//   const [fileBase64String, setFileBase64String] = useState('');
//
//   const onFileChange = event => {
//     setSelectedFile(event.target.files);
//     console.log(event.target.files[0]);
//     console.log(event.target.files[0].name);
//     console.log(event.target.files[0].size);
//     console.log(event.target.files[0].type);
//   };
//   const encodeFileBase64 = file => {
//     let reader = new FileReader();
//     if (file) {
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         let Base64 = reader.result;
//         console.log(Base64);
//         setFileBase64String(Base64);
//       };
//       reader.onerror = error => {
//         console.log('error:', error);
//       };
//     }
//   };
//   encodeFileBase64(selectedFiles[0]);
//   return (
//     <>
//       <input type="file" id="input" onChange={onFileChange} />
//       {fileBase64String && (
//         <img src={fileBase64String} alt="sticker" width="40" height="30" />
//       )}
//     </>
//   );
// };
// const mapStateToProps = state => ({
//   stickerUrl: state.bricks.addStickerUrl,
// });
// export default connect(mapStateToProps)(EncodeBase64);

class BrickTemplate extends React.Component {
  state = {
    brickText: '',
  };
  handleChange = event => {
    this.setState({ brickText: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.createBrick(this.state.brickText, this.props.stickerUrl);
    this.setState({
      brickText: '',
    });
    console.log(this.props.stickerUrl);
    this.props.history.push('/');
  };
  render() {
    if (!this.props.auth.uid) return <Redirect to="/login" />;
    return (
      <div className={s.container}>
        <form onSubmit={this.handleSubmit} className={s.brickForm}>
          <div>
            <h3 className={s.greeting}>
              {' '}
              Hi, {this.props.profile.firstName} {this.props.profile.lastName} !
            </h3>
            <p className={s.title}>Tell us something:</p>
            <textarea
              type="text"
              id="brickText"
              onChange={this.handleChange}
              value={this.state.brickText}
              maxLength="350"
            >
              {' '}
            </textarea>
          </div>
          <EncodeBase64 />
          <button
            type="submit"
            className={s.btn}
            disabled={!this.state.brickText}
          >
            Create brick
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  brickText: state.bricks.brickText,
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  stickerUrl: state.bricks.items,
});
const mapDispatchToProps = dispatch => ({
  changeBrickText: event =>
    dispatch(bricksAction.changeBrickText(event.target.value)),
  createBrick: (brickText, stickerUrl) => dispatch(bricksAction.createBrick({ brickText, stickerUrl} )),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BrickTemplate),
);
