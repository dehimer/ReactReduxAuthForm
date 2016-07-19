import { SELECT_COUNTRY } from 'actions';

export default function countries (state={}, action) {
	switch (action.type)
	{
		case SELECT_COUNTRY:
			return {...state, current_country: action.payload};
		default:
			return state;
	}
}