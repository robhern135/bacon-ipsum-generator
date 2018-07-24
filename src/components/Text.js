import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class Text extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: props.value
      }
  }
  onChange = (e) => {
    this.setState({ value: e.target.value }, function(){
        this.props.onChange(this.state.value);
    });

  }
  render() {
    return (
      <div className="text">
        <TextField
          id="number"
          label="Number"
          value={this.state.value}
          type="number"
          className="form-control"
          onChange={this.onChange}
          margin="normal"
        />
      </div>
    )
  }
}

export default Text;