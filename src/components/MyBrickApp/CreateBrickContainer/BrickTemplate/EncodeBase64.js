import React, { useState } from 'react';
import { connect } from 'react-redux';
import bricksAction from '../../../../redux/actions';

const EncodeBase64 = ({ addStickerUrl, stickerUrl }) => {
  const [selectedFiles, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState('');

  const onFileChange = event => {
    setSelectedFile(event.target.files);
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    console.log(event.target.files[0].size);
    console.log(event.target.files[0].type);
  };
  const encodeFileBase64 = file => {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let Base64 = reader.result;
        console.log(Base64);
        console.log(stickerUrl);
        setFileBase64String(Base64);
      };
      reader.onerror = error => {
        console.log('error:', error);
      };
    }
  };
  encodeFileBase64(selectedFiles[0]);
  return (
    <>
      <input type="file" id="input" onChange={onFileChange} />
      {fileBase64String && (
        <img src={fileBase64String} alt="sticker" width="40" height="30" />
      )}
      <button type="button" onClick={() => addStickerUrl(fileBase64String)}>
        Add sticker
      </button>
    </>
  );
};
const mapStateToProps = state => ({
  stickerUrl: state.bricks.items,
});
const mapDispatchToProps = dispatch => ({
  addStickerUrl: stickerUrl => dispatch(bricksAction.addStickerUrl(stickerUrl)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EncodeBase64);
