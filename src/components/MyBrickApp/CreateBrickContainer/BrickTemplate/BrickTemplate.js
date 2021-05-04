import React from 'react';
import bricksAction from '../../../../redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './BrickTemplate.module.css';

class BrickTemplate extends React.Component {
  state = {
    brickText: '',
  };
  handleChange = event => {
    this.setState({ brickText: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.createBrick(this.state.brickText);
    this.setState({
      brickText: '',
    });
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
          <button type="submit" className={s.btn} disabled = {!this.state.brickText}>
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
});
const mapDispatchToProps = dispatch => ({
  changeBrickText: event =>
    dispatch(bricksAction.changeBrickText(event.target.value)),
  createBrick: brickText => dispatch(bricksAction.createBrick(brickText)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickTemplate);
