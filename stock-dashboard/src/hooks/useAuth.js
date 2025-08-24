import { useAuthContext } from "../context/AuthContext";

function useAuth() {
  const { user, login, logout } = useAuthContext();
  return { user, login, logout };
}

export default useAuth;
