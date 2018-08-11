import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  cost: 0,
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <fieldset className="category-form" data-cy="category-form" >
      <form
        // data-cy="category-form"
        onSubmit={ this.handleSubmit } className="category-form">
      <input
      type="text"
      name="title"
      placeholder="title"
      value={this.state.title}
      onChange={this.handleChange}
      />
      <input
      type="number"
      min="0"
      name="cost"
      placeholder="cost"
      value={this.state.cost}
      onChange={this.handleChange}
      />
      <button type="submit">{buttonText}</button>
      </form>
    </fieldset>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
