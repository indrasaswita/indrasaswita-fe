import { configureStore, ThunkAction, Action, EnhancedStore } from "@reduxjs/toolkit"
import authReducer from "@storages/auth/reducer"

// root reducer
export const store: EnhancedStore<any> = configureStore({
	reducer: {
		auth: authReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void>
	= ThunkAction<
		ReturnType,
		RootState,
		unknown,
		Action<string>
	>
