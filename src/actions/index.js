export const NOTHING = 'NOTHING';
export const SENT_EMAIL = 'SENT_EMAIL';

export function nothing (data) {
	return {
		type: NOTHING,
		payload: data
	}
}