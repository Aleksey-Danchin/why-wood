import { FC, ReactElement, useMemo } from "react";

interface IVisibleFragment {
	show?: any;
	hide?: any;
}

const VisibleFragment: FC<IVisibleFragment> = ({ children, show, hide }) => {
	const mode = useMemo(() => {
		if (hide !== undefined) {
			return !Boolean(hide);
		}

		if (show !== undefined) {
			return Boolean(show);
		}

		return true;
	}, [hide, show]);

	if (mode && children) {
		return children as ReactElement;
	}

	return null;
};

export default VisibleFragment;
