import React, { Component } from 'react';
import './EditableHeading.css';

class EditableHeading extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: 'Camakari',
      dirtyDescription: '',
      isEditing: false 
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.discardChange = this.discardChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }
  
  toggleEdit(e) {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
      dirtyDescription: prevState.description
    }));
  }

  saveChange(e) {
    this.setState(prevState => ({
      description: prevState.dirtyDescription
    }));
    this.toggleEdit(e);
  }

  discardChange(e) {
    this.toggleEdit(e);
  }

  handleChange(e) {
    this.setState({dirtyDescription: e.target.value})
  }

  render() {
    return (
      <div>
        {!this.state.isEditing && <div onClick={this.toggleEdit}>{this.state.description}</div>}
        {this.state.isEditing && <div>
          <input type="text" value={this.state.dirtyDescription} onChange={this.handleChange} />
          <button type="button" onClick={this.saveChange}>Save</button>
          <button type="button" onClick={this.discardChange}>Discard</button>
        </div>}
      </div>
    );
  }
}

export default EditableHeading;
