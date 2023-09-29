import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from "../screens/Settings";
import { CustomHeader } from "../components/CustomHeader";
import { MyBottomTab } from "./MyBottomTab";
import { Onboarding } from "../screens/Onboarding";

const HomeStack = createStackNavigator();

const screenConfig = {
    
}
export const MyStack = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                //title: 'globalmente'
                headerTitleAlign: 'center',
                presentation: 'modal',
                //presentation: 'transparentModal',
                //presentation: 'card',
                gestureEnabled: true,
                keyboardHandlingEnabled: true,
                //header: ({navigation, route, options, back}) => (
                //    <CustomHeader title={route.name} />
                //)
            }}
        >
            <HomeStack.Screen name='Root' component={MyBottomTab}/>
            <HomeStack.Group screenOptions={{headerShown: true}}>
                <HomeStack.Screen 
                    name='Settings' 
                    component={Settings} 
                    options={{
                        title: 'Settings',
                        headerBackTitle: 'Home',
                    }}/>
                    <HomeStack.Screen 
                    name='Onboarding' 
                    component={Onboarding} 
                    options={{
                        headerShown: false,
                    }}/>
            </HomeStack.Group>
            
        </HomeStack.Navigator>
    )
}