"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, AppState } from './components/app';

const ROOT : any = document.getElementById("container");

const appState: AppState = new AppState();

ReactDOM.render(<App appState={appState}/>, ROOT);