import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";

const App: FC = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />

			<Route path="/registration" element={<RegistrationPage />} />

			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	);
};

export default App;
