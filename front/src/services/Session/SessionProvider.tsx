import { FC, useCallback, useMemo } from "react";
import usePatchedState from "../../hooks/usePatchedState";
import SessionContext from "./SessionContext";

const SessionProvider: FC = ({ children }) => {
	const [state, patchState] = usePatchedState({
		isAuthenticated: false,
		user: {
			id: 0,
			name: "",
		},
	});

	const signin = useCallback(() => {}, []);

	const singout = useCallback(() => {}, []);

	const value = useMemo(
		() => ({ ...state, signin, singout }),
		[signin, singout, state]
	);

	return (
		<SessionContext.Provider value={value}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionProvider;
