import { createSwitchNavigator } from '@react-navigation/core';
import HelloScreen from '@/modules/hello/screens/HelloScreen';
import ProfileScreen from '@/modules/profile/screens/ProfileScreen';

export default createSwitchNavigator(
    {
        Home: { screen: HelloScreen, navigationOptions: { title: 'Hello', path: '/' } },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: { title: 'Profile', path: '/profile' },
        },
    },
    {
        initialRouteName: 'Home',
    },
);
