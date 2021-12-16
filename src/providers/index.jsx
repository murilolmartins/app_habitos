import AuthProvider from "./Auth";
import HabitsContext from "./IndividualsHabits/index";
import UserProvider from "./User";
import { GoalsProvider } from "./Goals";
import HabitsProvider from "./IndividualsHabits";
import { ActivitiesProvider } from "./Activities";
import GroupsProvider from "./Groups";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider>
          <GroupsProvider>
            <GoalsProvider>
              <ActivitiesProvider>
                <HabitsProvider> {children}</HabitsProvider>
              </ActivitiesProvider>
            </GoalsProvider>
          </GroupsProvider>
        </HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
