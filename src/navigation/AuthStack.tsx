import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { SingUp } from "../screens/SingUp";

export const AuthStack = () => {
    const Auth = createStackNavigator();
    return(
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Auth.Screen name="Login" component={Login}/>
            <Auth.Screen name="SingUp" component={SingUp}/>
        </Auth.Navigator>
    )

}