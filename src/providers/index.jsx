import AuthProvider from "./Auth";
import UserProvider from "./User";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children} </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
