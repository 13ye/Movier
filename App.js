import MovieListScene from './MovieListScene'
import MovieDetailScene from './MovieDetailScene'
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator(
  {
    Home: {screen: MovieListScene},
    Detail: {screen: MovieDetailScene}
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
