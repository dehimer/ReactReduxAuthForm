export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SELECT_CITY = 'SELECT_CITY';
export const SWITCH_STAGE = 'SWITCH_STAGE';
export const RESET_AUTHINFO = 'RESET_AUTHINFO';
export const UPDATE_AUTHINFO_NAME = 'UPDATE_AUTHINFO_NAME';
export const UPDATE_AUTHINFO_EMAIL = 'UPDATE_AUTHINFO_EMAIL';
export const UPDATE_AUTHINFO_CITY = 'UPDATE_AUTHINFO_CITY';
export const UPDATE_AUTHINFO_COUNTRY = 'UPDATE_AUTHINFO_COUNTRY';
export const UPDATE_AUTHINFO_SOCIALNETWORKS = 'UPDATE_AUTHINFO_SOCIALNETWORKS';
export const UPDATE_AUTHINFO_ANIMAL = 'UPDATE_AUTHINFO_ANIMAL';
export const UPDATE_CURRENT_FORM_STATE = 'UPDATE_CURRENT_FORM_STATE';


export function switchStage (stage) {
	return {
		type: SWITCH_STAGE,
		payload: stage
	}
}

export function selectCities () {
	return {
		type: SELECT_CITY
	}
}

export function selectCountries () {
	return {
		type: SELECT_COUNTRY
	}
}

export function resetAuthInfo (authinfo) {
	return {
		type: RESET_AUTHINFO,
		payload: authinfo
	}
}

export function updateAuthInfoName (name) {
	return {
		type: UPDATE_AUTHINFO_NAME,
		payload: name
	}
}

export function updateAuthInfoEmail (email) {
	return {
		type: UPDATE_AUTHINFO_EMAIL,
		payload: email
	}
}

export function updateAuthInfoCountry (country) {
	return {
		type: UPDATE_AUTHINFO_COUNTRY,
		payload: country
	}
}

export function updateAuthInfoCity (city) {
	return {
		type: UPDATE_AUTHINFO_CITY,
		payload: city
	}
}

export function updateAuthInfoSocialNetworks(socialnetworks) {
	return {
		type: UPDATE_AUTHINFO_SOCIALNETWORKS,
		payload: socialnetworks
	}
}

export function updateAuthInfoAnimal(animal) {
	return {
		type: UPDATE_AUTHINFO_ANIMAL,
		payload: animal
	}
}

export function updateCurrentFormState(state) {
	return {
		type: UPDATE_CURRENT_FORM_STATE,
		payload: state
	}
}