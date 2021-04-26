import React from 'react';
import { connect } from 'react-redux';
import s from './Search.module.css';
import actionTypes from '../../../redux/actions';

const Search = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      <input
        type="text"
        className={s.searchFiled}
        value={value}
        onChange={onChange}
        name=""
        id=""
        placeholder="enter brick's id..."
      />
    </label>
  );
};
const mapStateToProps = state => ({
  value: state.bricks.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actionTypes.changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
