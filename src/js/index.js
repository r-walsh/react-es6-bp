import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import '../style/index.scss';

import Test from './components/default';

document.addEventListener(`DOMContentLoaded`, () => {
	let reactNode = document.getElementById(`react-node`);

	if ( reactNode ) {
		ReactDOM.render(
			<Provider store={ store }>
				<Router history={ browserHistory }>
					<Route path="/" component={ Test } />
				</Router>
			</Provider>
		, reactNode );
	}
});