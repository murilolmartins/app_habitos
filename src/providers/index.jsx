import AuthProvider from "./Auth";
import HabitsContext from "./IndividualsHabits/index";
import UserProvider from "./User";
import HabitsProvider from "./IndividualsHabits";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider> {children}</HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
