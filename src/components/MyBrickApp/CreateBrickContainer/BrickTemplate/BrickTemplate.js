import React from 'react';
import bricksAction from '../../../../redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BrickTemplate extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.createBrick(this.props.brickText);
    this.setState({
      brickText: '',
    });
    // this.props.history.push('/')
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
              onChange={this.props.changeBrickText}
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
  changeBrickText: event =>
    dispatch(bricksAction.changeBrickText(event.target.value)),
  createBrick: brickText => dispatch(bricksAction.createBrick(brickText)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickTemplate);
