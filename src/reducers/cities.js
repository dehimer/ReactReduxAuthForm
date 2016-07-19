import { SELECT_CITY } from 'actions';

export default function cities (state={}, action) {
	switch (action.type)
	{
		case SELECT_CITY:
			return {...state, current_city: action.payload};
		default:
			return state;
	}
}