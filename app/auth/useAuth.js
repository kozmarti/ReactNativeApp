import AuthContext from "./context"
import { useContext } from "react";
import authStorage from './storage';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
	const {user, setUser} = useContext(AuthContext);
	const logOut = () => {
		setUser(null);
		authStorage.removeToken();
	}
	const login = (authToken) => {
		const user = jwtDecode(authToken);
		setUser(user);
		authStorage.storeToken(authToken);
	}
	return { user, login, logOut };

}

export default useAuth;