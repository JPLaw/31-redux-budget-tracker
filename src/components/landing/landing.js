import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-action';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

const mapStateToProps = (store) => {
  return {
    categories: store.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

class Landing extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);
