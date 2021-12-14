import AuthProvider from "./Auth";
import HabitsContext from "./IndividualsHabits/index";
import UserProvider from "./User";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsContext>{children}</HabitsContext>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
