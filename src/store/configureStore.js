import { createStore, compose } from 'redux'

import app from '../reducers';

export default function configureStore (initialState) {

	const store = createStore(
		app,
		initialState,
		compose(
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	if (module.hot)
	{
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		});
	}

	return store;
}