import { ActionType } from "@storages/types"
import { AUTH_LOADING, AUTH_UPDATE } from "./constant"
import { AuthState } from "./type"

export const updateAuth
	// eslint-disable-next-line no-unused-vars
	: (newAuth: AuthState) => (dispatch: any) => void
	= (newAuth: AuthState) => (dispatch: any) => {
		dispatch(activateLoading())

		dispatch({
			type: AUTH_UPDATE,
			payload: {
				auth: newAuth,
			},
		})
	}

const activateLoading
	: () => ActionType
	= () => {
		return {
			type: AUTH_LOADING,
		}
	}
