import React from 'react';
import bricksAction from '../../../../redux/actions';
import {connect} from "react-redux";

class BrickTemplate extends React.Component {
  handleChange = event => {
    this.setState({
      brickText: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render(){
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="brickText">
            <textarea
                type="text"
                id="brickText"
                cols="30"
                rows="10"
                onChange={this.props.handleChange}
                value={this.props.brickText}
            > </textarea>
              </label>
            </div>
            <button type="button" onClick={()=>this.props.createBrick(this.props.brickText)}>Create brick</button>
          </form>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  brickText: state.bricks.brickText,
});
const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(bricksAction.changeBrickText(event.target.value)),
  createBrick: brickText => dispatch(bricksAction.createBrick(brickText)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickTemplate);
