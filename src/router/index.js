import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(StackNavigator);
