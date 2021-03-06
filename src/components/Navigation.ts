import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
  DefaultAnimation: undefined;
  ScrollAnimation: undefined;
  ColorIntensity: undefined;
  Pagination: undefined;
  Mask: undefined;
  Balloon: undefined;
  Commerzbank: undefined;
  ScrollHeader: undefined;
};
