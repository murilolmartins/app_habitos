import AuthProvider from "./Auth";
import UserProvider from "./User";
import {GoalsProvider} from "./Goals";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GoalsProvider>
        <UserProvider>{children}</UserProvider>
      </GoalsProvider>
    </AuthProvider>
  );
};

export default Providers;
