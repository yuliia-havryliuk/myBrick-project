import React from 'react';
import bricksAction from '../../../../redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BrickTemplate extends React.Component {
  handleChange = event => {
    this.setState({
      brickText: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.createBrick(this.props.brickText);
    this.setState({
      brickText: '',
    });
  };
  render() {
    if (!this.props.auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea
              type="text"
              id="brickText"
              cols="30"
              rows="10"
              onChange={this.props.handleChange}
              value={this.props.brickText}
            >
              {' '}
            </textarea>
          </div>
          <button type="submit">Create brick</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  brickText: state.bricks.brickText,
  auth: state.firebase.auth,
});
const mapDispatchToProps = dispatch => ({
  handleChange: event =>
    dispatch(bricksAction.changeBrickText(event.target.value)),
  createBrick: brickText => dispatch(bricksAction.createBrick(brickText)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickTemplate);
