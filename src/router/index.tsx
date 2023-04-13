import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTES} from './routes';

import {Home} from '../screens/Home/Home';
import {DetailProduct} from '../screens/DetailProduct';

const Stack = createStackNavigator();

/**
 * Root Navigator component that defines the navigation structure of the app.
 *
 * @returns {JSX.Element} The root navigator element.
 */
const RootNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.DETAIL_PRODUCT}
          component={DetailProduct}
          options={({route}) => ({
            title: route.params?.productName || 'Product Detail',
            headerStyle: styles.headerStyle,
            headerTitleContainerStyle: styles.titleContainer,
            headerTitleStyle: styles.headerTitle,
            headerLeft: () => null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 150,
    backgroundColor: '#CFD6FF',
  },
  titleContainer: {
    position: 'relative',
  },
  headerTitle: {
    position: 'absolute',
    bottom: 24,
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 24,
    color: '#000000',
  },
});

export default RootNavigator;
