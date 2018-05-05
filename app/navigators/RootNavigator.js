import { StackNavigator } from 'react-navigation';

import TodosList from '../todos/screens/TodosList'
import TodosCreate from '../todos/screens/TodosCreate'
import FoodsList from '../foods/screens/FoodsList'
import ProfileList from '../profile/screens/ProfileList'
import ProfileCreate from '../profile/screens/ProfileCreate'
const RootNavigator = StackNavigator({
  ProfileCreate: {
    screen: ProfileCreate,
    navigationOptions: {
      title: 'Create Profile'
    }
  },
  ProfileList: {
    screen: ProfileList,
    navigationOptions: {
      title: 'Profile List'
    }
  },
  TodosList: {
    screen: TodosList,
    navigationOptions: {
      title: 'Todos List'
    }
  },
  TodosCreate: {
    screen: TodosCreate,
    navigationOptions: {
      title: 'Create Todo'
    }
  },
  FoodsList: {
    screen: FoodsList,
    navigationOptions: {
      title: 'Foods List'
    }
  },
})

export default RootNavigator;