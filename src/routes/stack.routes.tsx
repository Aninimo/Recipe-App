import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GetStarted } from '../screens/GetStarted'
import { Home } from '../screens/Home'
import { Details } from '../screens/Details'

const Stack = createNativeStackNavigator()

export function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='GetStarted'
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
