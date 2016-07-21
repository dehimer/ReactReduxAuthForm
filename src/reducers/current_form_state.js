import { UPDATE_CURRENT_FORM_STATE } from 'actions';

export default function current_form_state (state=false, action) {
	switch (action.type)
	{
		case UPDATE_CURRENT_FORM_STATE:
			console.log('UPDATE_CURRENT_FORM_STATE'+action.payload);
			return action.payload;
		default:
			return state;
	}
}