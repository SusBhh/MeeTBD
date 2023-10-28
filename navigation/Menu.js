import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppNavigation from './AppNavigation';

//Screen names
const homeName = "Home";
const groupsName = "Groups";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';

function Menu() {
    return (
        <NavigationContainer independent={true}>
            <AppNavigation />
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === groupsName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === profileName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {
                        paddingBottom: 10,
                        fontSize: 10,
                    },
                    tabBarStyle: [
                        {
                            display: 'flex',
                        },
                        null,
                    ],
                })}
            >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={groupsName} component={GroupsScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Menu;