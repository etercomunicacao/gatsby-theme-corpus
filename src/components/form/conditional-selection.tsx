import React, { Component } from 'react';

class FisioForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }


  renderSelectedForm(param) {
    switch (param) {
      case 'form_name1':
        return <form name="form_name1" id="form_name1">
          form 1
            </form>;
      case 'form_name2':
        return <form name="form_name1" id="form_name2">
          form 2
            </form>;
      case 'form_name3':
        return <form name="form_name1" id="form_name3">
          form 3
            </form>;
      default:
        return null;
    }
  }

  handleChange(event) { this.setState({ selectedValue: event.target.value }); }

 

  render() {
    return (

      <div>
        <form>
          <select value={this.state.selectedValue} onChange={this.handleChange}>
            <option value="" selected="selected"></option>
            <option value="form_name1">Form 1</option>
            <option value="form_name2">Form 2</option>
            <option value="form_name3">Form 3</option>
          </select>
        </form>
        {this.renderSelectedForm(this.state.selectedValue)}
      </div>

    );
  }
}

export default FisioForm