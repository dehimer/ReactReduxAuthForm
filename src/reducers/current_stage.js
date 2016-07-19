import { SWITCH_STAGE } from 'actions';

export default function current_stage (state=0, action) {
	switch (action.type)
	{
		case SWITCH_STAGE:
			console.log(`next stage ${action.payload}`)
			return action.payload;
		default:
			return state;
	}
}