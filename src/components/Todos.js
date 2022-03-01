import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchTodos } from "../actions/todoActions";

const Todos = props => {

  useEffect(() => {
    props.fetchTodos();
  });


  return (
    <>
      <h1>Task List</h1>

      {
        props.todos.map((eachTodo, todoIndex) => {
          return (
            <div key={todoIndex}>

              <h3>{eachTodo.name}</h3>

            </div>
          );
        })

      }
    </>);
};

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
  todos: state.todos.tasks
});



export default connect(mapStatetoProps, { fetchTodos })(Todos);
