export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SELECT_CITY = 'SELECT_CITY';
export const SWITCH_STAGE = 'SWITCH_STAGE';
export const RESET_AUTHINFO = 'RESET_AUTHINFO';
export const UPDATE_AUTHINFO_CITY = 'UPDATE_AUTHINFO_CITY';
export const UPDATE_AUTHINFO_COUNTRY = 'UPDATE_AUTHINFO_COUNTRY';
export const UPDATE_AUTHINFO_SOCIALNETWORKS = 'UPDATE_AUTHINFO_SOCIALNETWORKS';
export const UPDATE_AUTHINFO_ANIMAL = 'UPDATE_AUTHINFO_ANIMAL';

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