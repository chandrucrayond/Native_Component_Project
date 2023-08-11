import {NavigationProp} from '@react-navigation/native';

export interface itemProps {
  title?: string;
  description?: string;
}
export interface routeProps {
  params?: {item?: itemProps}; // Modify the structure as needed
}

export interface CardExpandedProps {
  route?: routeProps;
  navigation?: NavigationProp<any>;
  params?: object;
}
