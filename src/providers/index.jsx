import AuthProvider from "./Auth";
import HabitsContext from "./IndividualsHabits/index";
import UserProvider from "./User";
import { GoalsProvider } from "./Goals";
import GroupsProvider from "./Groups";
import HabitsProvider from "./IndividualsHabits";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GroupsProvider>
          <GoalsProvider>
            <HabitsProvider> {children}</HabitsProvider>
          </GoalsProvider>
        </GroupsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
