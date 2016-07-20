import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import App from './components/App';

const initialAppState = {
	countries: {
		'1': 'Ukraine',
		'2': 'Germany',
		'3': 'France',
		'4': 'Spain',
		'5': 'Sweden',
		'6': 'USA',
		'7': 'Canada',
		'8': 'Moldova',
		'9': 'Belarus',
		'10': 'Poland'
	},
	cities: {
		'1': {'country': 1, 'name': 'Ukraine'},
		'2': {'country': 3, 'name': 'Paris'},
		'3': {'country': 4, 'name': 'Madrid'},
		'4': {'country': 6, 'name': 'Houston'},
		'5': {'country': 7, 'name': 'Montreal'},
		'6': {'country': 8, 'name': 'Кишинев'},
		'7': {'country': 9, 'name': 'Minsk'},
		'8': {'country': 10, 'name': 'Warsaw'},
		'100': {'country': 1, 'name': 'Львов'},
		'101': {'country': 1, 'name': 'Николаев'},
		'103': {'country': 1, 'name': 'Переяслав-Хмельницкий'},
		'104': {'country': 1, 'name': 'Каменец-Подольский'},
		'105': {'country': 1, 'name': 'Donetsk'},
		'106': {'country': 1, 'name': 'Kharkov'},
		'107': {'country': 1, 'name': 'Луцк'},
		'108': {'country': 1, 'name': 'Poltava'},
		'109': {'country': 1, 'name': 'Черновцы'},
		'299': {'country': 1, 'name': 'Чернигов'},
		'333': {'country': 1, 'name': 'Чернигов'}
	},
	stages: [1, 2, 3, 4]
};


const store = configureStore(initialAppState);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root')
)