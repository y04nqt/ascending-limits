// index.jsx
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom';

import App from "./app/Amalgamation";

const app = document.getElementById('maelstrom');

ReactDOM.render(<App />, app);