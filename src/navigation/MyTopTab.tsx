import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Contacts } from "../screens/Contacts";
import { Home } from "../screens/Home";
import { Colors } from "../constants/colors";
import { ContactsRedux } from "../screens/ContactsRedux";

export const MyTopTab = () => {
    const TopTab = createMaterialTopTabNavigator();

    return (
        <TopTab.Navigator
            initialRouteName="Home"
            tabBarPosition="top"
            screenOptions={{
                tabBarLabelStyle: { color: Colors.secondary},
                tabBarIndicatorStyle: { backgroundColor: Colors.primary}
            }}
        >
            <TopTab.Screen name="Home" component={Home}/>
            <TopTab.Screen name="Contacts" component={Contacts}/>
            <TopTab.Screen name="Redux" component={ContactsRedux}/>
        </TopTab.Navigator>
    );
}