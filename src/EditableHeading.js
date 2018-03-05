import React, { Component } from 'react';
import './EditableHeading.css';
import { Input, Button, Icon, Header } from 'semantic-ui-react';

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
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  
  toggleEdit(e) {
    if (!this.state.isEditing) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

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

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return
    }

    this.saveChange(e);        
  }

  render() {
    return (
      <div style={{height: '40px', maxHeight: '40px'}}>
        {!this.state.isEditing && <div>
          <Header as='h2' onClick={this.toggleEdit}>{this.state.description}</Header>
        </div>}
        {this.state.isEditing && <div ref={node => {this.node = node; }} style={{position: 'relative', maxWidth: '300px'}}>
          <Button.Group size='mini' style={{position: 'absolute', top: '30px', right: '0', zIndex: 100, opacity: '0.5'}}>
            <Button icon color='green' onClick={this.saveChange} inverted><Icon name='checkmark' /></Button>
            <Button icon color='red' onClick={this.discardChange} inverted><Icon name='remove' /></Button>
          </Button.Group>
          <Input size='mini' value={this.state.dirtyDescription} onChange={this.handleChange} style={{width: '100%', border: 'none'}} />
        </div>}
      </div>
    );
  }
}

export default EditableHeading;
