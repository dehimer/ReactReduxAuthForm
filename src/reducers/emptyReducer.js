import { NOTHING } from 'actions';

export default function emptyReducer (state, action) {
	switch (action.type)
	{
		case NOTHING:
			return state;
			break;
		default:
			return state;
	}
}