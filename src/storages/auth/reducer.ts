import { ActionType } from "@storages/types"
import {
	AUTH_LOADING,
	AUTH_UPDATE,
} from "./constant"
import { AuthState } from "./type"

export const initialState
	: AuthState
	= {
		id: null,
		name: "",
		firstName: "",
		lastName: "",
		icon: "",
		loading: false,
	}

export type AuthReducer
	// eslint-disable-next-line no-unused-vars
	= (state: AuthState, action: ActionType) =>
		AuthState

const authReducer
	: AuthReducer
	= (
		state: AuthState = initialState,
		action: ActionType,
	) => {
		switch(action.type) {

		case AUTH_UPDATE:
			return {
				...state,
				...action.payload.auth,
				loading: false,
			}

		case AUTH_LOADING:
			return {
				...state,
				loading: true,
			}

		default:
			return {
				...state,
			}
		}

	}

export default authReducer
