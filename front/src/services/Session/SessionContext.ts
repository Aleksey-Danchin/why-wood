import { createContext } from "react";

const SessionContext = createContext({
	isAuthenticated: false,
	user: {
		id: 0,
		name: "",
	},

	signin: () => {},
	singout: () => {},
});

export default SessionContext;
