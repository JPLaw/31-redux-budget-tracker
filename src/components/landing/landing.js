import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as categoryActions from '../../action/category-action';
import CategoryForm from '../category-form/category-form';
import Category from '../category-item/category-item';

const mapStateToProps = (store) => {
  return {
    categories: store,
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
        <ul>
        {
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
        }
        </ul>
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);
