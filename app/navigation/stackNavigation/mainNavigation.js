import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthorDetails from '../../screens/authorDetails';
import BookDetails from '../../screens/bookDetails';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthorDetails"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AuthorDetails"
        component={AuthorDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
