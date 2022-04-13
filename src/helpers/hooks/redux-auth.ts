import { AuthState } from "@storages/auth/type"
import { RootState } from "@storages/store"
import { useSelector } from "react-redux"

const useReduxAuth
	: () => {
		authState: AuthState,
	}
	= () => {
		const state
			: AuthState
			= useSelector((state: RootState) => {
				return state.auth
			})

		return {
			authState: state,
		}
	}

export default useReduxAuth
