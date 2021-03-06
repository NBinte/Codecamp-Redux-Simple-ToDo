import React from "react";

import { Provider } from "react-redux";

import Todos from "./components/Todos";
import TodosForm from "./components/TodosForm";

import store from "./components/store";

const App = () => {
  return (<>
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <TodosForm></TodosForm>
        <Todos></Todos>
      </div>
    </Provider>
  </>);
};

export default App;
