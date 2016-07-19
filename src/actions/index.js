export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SELECT_CITY = 'SELECT_CITY';
export const SWITCH_STAGE = 'SWITCH_STAGE';

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