import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category-action';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;
    return (
      <div className="category" key={key}>
        <h3> { category.title }</h3>
        <p> Cost: {category.cost} </p>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button onClick={() => categoryRemove(category)}>Delete</button>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};


export default connect(null, mapDispatchToProps)(Category);
