import { createDrawerNavigator } from "@react-navigation/drawer";
import { Notifications } from "../screens/Notifications";
import { MyStack } from "./MyStack";
import { Colors } from "../constants/colors";
import { useWindowDimensions } from "react-native";


export const MyDrawer = () => {
    const Drawer = createDrawerNavigator();
    const {width, height} = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: Colors.secondary,
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen 
                name='Stack' 
                component={MyStack}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen 
                name='Notifications' 
                component={Notifications}
            />
        </Drawer.Navigator>
    )
}