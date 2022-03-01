import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => navigate("/registration")}>
				Регистрация
			</button>
		</div>
	);
};

export default LoginPage;
