import { useCallback, useState } from "react";

const usePatchedState = <T extends {}>(
	data: T
): [T, (data: Partial<T>) => void] => {
	const [state, setState] = useState(data);

	const patch = useCallback(
		(data: Partial<T>) =>
			setState((state) => ({
				...state,
				...data,
			})),
		[]
	);

	return [state, patch];
};

export default usePatchedState;
