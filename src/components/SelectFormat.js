import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectFormat extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: props.value
      }
  }
  onChange = (e, index, value) => {
    this.setState({ value: value }, function(){
        this.props.onChange(this.state.value);
    });

  }
  render() {
    return (
      <div className="selectFormat">
        <SelectField
          className="form-control"
          name="format"
          floatingLabelText="Format"
          value={this.state.value}
          onChange={this.onChange}
        >
          <MenuItem value="html" primaryText="HTML" />
          <MenuItem value="text" primaryText="Text" />
        </SelectField>
      
      </div>
    )
  }
}

export default SelectFormat;