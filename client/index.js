import { render } from 'react-dom'
import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/stylesheets/style.scss'
require("babel-core/register");
require("babel-polyfill");


render(<App />, document.getElementById('root'))