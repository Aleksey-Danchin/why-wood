import { FC, ReactElement, useMemo } from "react";
import useSession from "./useSession";

interface ISession {
	authenticated?: any;
	notAuthenticated?: any;
}

const Session: FC<ISession> = ({
	authenticated,
	notAuthenticated,
	children,
}) => {
	const { isAuthenticated } = useSession();

	const mode = useMemo(() => {
		let flag = null;

		if (authenticated !== undefined) {
			flag = Boolean(authenticated);
		} else if (notAuthenticated !== undefined) {
			flag = !Boolean(notAuthenticated);
		}

		if (flag === true && isAuthenticated) {
			return true;
		}

		if (flag === false && !isAuthenticated) {
			return true;
		}

		return false;
	}, [authenticated, isAuthenticated, notAuthenticated]);

	if (mode) {
		return children as ReactElement;
	}

	return null;
};

export default Session;
