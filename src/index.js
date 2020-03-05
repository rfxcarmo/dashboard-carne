import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom'
import { css } from 'styled-components'

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
`;

ReactDOM.render(
<BrowserRouter>
    <App style={{fonts : RobotoFont}}/>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
