import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from "./components/test";
import Drag from "./components/drag";

ReactDOM.render(
  <div>
    <Test title="Gaoding" desc="Hello Gaoding" />
    <Drag />
  </div>,
  document.getElementById('root')
);