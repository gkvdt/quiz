import {StackNavigator} from 'react-navigation';
import MainScreen from './src/screens/index';
import QuestsScreen from './src/screens/Quests'

const Router = StackNavigator({
  Main:{screen:MainScreen},
  Quests:{screen:QuestsScreen}
})


export default Router;