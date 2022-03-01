import React from "react";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodos } from "../actions/todoActions";
import { updateTodos } from "../actions/todoActions";

const TodosForm = props => {

  const [inputs, setInputs] = useState({
    name: ''
  });


  const handleSubmit = e => {
    e.preventDefault();

    let task = {
      name: inputs.name
    };

    props.addTodos(task);
    props.updateTodos(props.todos, task);
  };


  return (
    <>
      <h1>Add a post</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter task:</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          value={inputs.name}
          onChange={e => {
            setInputs(inputs => {
              return {
                ...inputs,
                [e.target.name]: e.target.value
              };
            });
          }}
        ></input>
        <br />
        <br />

        <button type='submit'>Add</button>
      </form>
    </>
  );
};

TodosForm.propTypes = {
  addTodos: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

const mapStatetoProps = state => ({

  todos: state.todos.tasks,

});


export default connect(mapStatetoProps, { addTodos, updateTodos })(TodosForm);
