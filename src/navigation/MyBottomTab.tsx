import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "../constants/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MyTopTab } from "./MyTopTab";

export const MyBottomTab = () => {
    const MyTab = createBottomTabNavigator();
    const navigation = useNavigation<any>();
    return(
        <MyTab.Navigator 
            initialRouteName="TopTab"
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarActiveTintColor: Colors.secondary,
            }}
        >
            <MyTab.Screen 
                name="TopTab"
                component={MyTopTab}
                options={{
                    headerLeft: () => {
                        return (<Pressable onPress={() => { navigation.openDrawer()}}>
                            <FontAwesome 
                                name="align-left" 
                                style={{marginLeft:15}} 
                                size={30} 
                                color={Colors.secondary} 
                            />
                        </Pressable>)
                    },
                    headerRight: () => (
                    <Pressable onPress={() => { navigation.navigate('Settings')}}>
                        <FontAwesome 
                            name="cog" 
                            style={{marginRight:15}} 
                            size={30} 
                            color={Colors.secondary} 
                        />
                    </Pressable>),
                    tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: 'green', color: Colors.light},
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={30} color={color} />,
                }}
            />
            <MyTab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
                }}
            />
        </MyTab.Navigator>
    )
}