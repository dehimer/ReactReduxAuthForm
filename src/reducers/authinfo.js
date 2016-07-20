import { RESET_AUTHINFO, UPDATE_AUTHINFO_CITY, UPDATE_AUTHINFO_COUNTRY, UPDATE_AUTHINFO_SOCIALNETWORKS, UPDATE_AUTHINFO_ANIMAL } from 'actions';

export default function authinfo (state={}, action) {

	switch (action.type)
	{
		case RESET_AUTHINFO:
			return {};
		case UPDATE_AUTHINFO_CITY:
			return {...state, city: action.payload};
		case UPDATE_AUTHINFO_COUNTRY:
			return {...state, country: action.payload, city:undefined};
		case UPDATE_AUTHINFO_SOCIALNETWORKS:
			console.log({...state, socialnetworks: action.payload});
			return {...state, socialnetworks: action.payload}
		case UPDATE_AUTHINFO_ANIMAL:
			return {...state, animal: action.payload}
		default:
			return state;
	}
}