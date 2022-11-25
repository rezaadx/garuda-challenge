import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import CreatePasswordScreen from "../screens/CreatePasswordScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SecurityAccessScreen from "../screens/SecurityAccessScreen";
import SuccessChangePasswordScreen from "../screens/SuccessChangePasswordScreen";
import { DefaultHeader, OnboardingHeader, CreatePasswordHeader } from '../components/headers'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
  >
    <Stack.Screen 
      name='Onboarding' 
      component={OnboardingScreen}
      options={{
        header: () => (<OnboardingHeader />),
      }}
    />
    <Stack.Screen 
      name='CreatePassword' 
      component={CreatePasswordScreen} 
      options={{
        header: (props) => (<CreatePasswordHeader appProgress={{current: 1, total: 3}} {...props} />)
      }}
    />
    <Stack.Screen 
      name='SecurityAccess' 
      component={SecurityAccessScreen}
      options={{
        header: (props) => (<DefaultHeader title="Security Access" {...props} />)
      }}
    />
    <Stack.Screen 
      name='ChangePassword' 
      component={ChangePasswordScreen}
      options={{
        header: (props) => (<DefaultHeader title="Change Password" {...props} />),
      }}
    />
    <Stack.Screen 
      name="SuccessChangePassword" 
      component={SuccessChangePasswordScreen} 
      options={{
        header: (props) => (<DefaultHeader title="Change Password" {...props} />)
      }} 
    />
  </Stack.Navigator>
)

export default AuthNavigator