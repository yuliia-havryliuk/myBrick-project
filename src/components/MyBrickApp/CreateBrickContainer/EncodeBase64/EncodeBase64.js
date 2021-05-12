import React, { useState } from 'react';
import { connect } from 'react-redux';
import bricksAction from '../../../../redux/actions';
import s from './EncodeBase64.module.css'

const EncodeBase64 = ({ addStickerUrl, stickerUrl }) => {
  const [selectedFiles, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState('');

  const onFileChange = event => {
    setSelectedFile(event.target.files);
  };
  const encodeFileBase64 = file => {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let Base64 = reader.result;
        setFileBase64String(Base64);
      };
      reader.onerror = error => {
        console.log('error:', error);
      };
    }
  };
  encodeFileBase64(selectedFiles[0]);
  return (
    <div className={s.container}>
      <input type="file" id="input" onChange={onFileChange} />
      {fileBase64String && (
        <img src={fileBase64String} alt="sticker" width="40" height="30" />
      )}
      <button type="button" onClick={() => addStickerUrl(fileBase64String)} className={s.btn}>
        Add sticker
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  stickerUrl: state.bricks.items,
});
const mapDispatchToProps = dispatch => ({
  addStickerUrl: stickerUrl => dispatch(bricksAction.addStickerUrl(stickerUrl)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EncodeBase64);
