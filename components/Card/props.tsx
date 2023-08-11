import { NavigationProp } from '@react-navigation/native';

export interface CardProps {
  navigation?: NavigationProp<any>;
  name?: string;
  style?: object;
  noItem?: number;
  title?: string;
  description? : string;
  id? : number;
}