import AuthProvider from "./Auth";
import HabitsContext from "./IndividualsHabits/index";
import UserProvider from "./User";
import {GoalsProvider} from "./Goals";
import HabitsProvider from "./IndividualsHabits";


const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GoalsProvider>
          <HabitsProvider> {children}</HabitsProvider>
        </GoalsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
