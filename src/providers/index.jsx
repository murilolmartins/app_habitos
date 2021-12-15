import AuthProvider from "./Auth";
import HabitsContext from "./IndividualsHabits/index";
import UserProvider from "./User";
import { GoalsProvider } from "./Goals";
import HabitsProvider from "./IndividualsHabits";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            <HabitsProvider> {children}</HabitsProvider>
          </ActivitiesProvider>
        </GoalsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
