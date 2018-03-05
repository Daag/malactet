import React, { Component } from 'react';
import './EditableText.css';
import { Button, Icon, TextArea, Form } from 'semantic-ui-react';

class EditableText extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          description: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered. ',
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
      <div style={{position: 'relative', maxWidth: '300px'}}>
        {!this.state.isEditing && <div onClick={this.toggleEdit}>{this.state.description    }</div>}
        {this.state.isEditing &&<div ref={node => {this.node = node; }}>
            
            <Form>
              <Button.Group size='mini' style={{position: 'absolute', top: '0px', right: '0', opacity: '0.5'}}>
                  <Button icon color='green' onClick={this.saveChange} inverted><Icon name='checkmark' /></Button>
                  <Button icon color='red' onClick={this.discardChange} inverted><Icon name='remove' /></Button>
              </Button.Group>
              <TextArea onChange={this.handleChange} style={{width: '100%', minHeight: 300, padding: 20}} autoHeight value={this.state.dirtyDescription} />
            </Form>
        </div>}
      </div>
    );
  }
}

export default EditableText;