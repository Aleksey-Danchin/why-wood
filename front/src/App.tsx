import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { Session } from "./services/Session";

const App: FC = () => {
	return (
		<Routes>
			<Route
				path="/login"
				element={
					<>
						<Session notAuthenticated>
							<LoginPage />
						</Session>

						<Session authenticated>
							<Navigate to="/profile" />
						</Session>
					</>
				}
			/>

			<Route
				path="/registration"
				element={
					<>
						<Session notAuthenticated>
							<RegistrationPage />
						</Session>

						<Session authenticated>
							<Navigate to="/profile" />
						</Session>
					</>
				}
			/>

			<Route
				path="/profile"
				element={
					<>
						<Session notAuthenticated>
							<LoginPage />
						</Session>

						<Session authenticated>
							<ProfilePage />
						</Session>
					</>
				}
			/>

			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	);
};

export default App;
