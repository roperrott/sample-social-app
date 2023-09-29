import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./MyDrawer";
import { AuthStack } from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from "../features/auth/auth";
import { Splash } from "../screens/Splash";
import * as Notifications from "expo-notifications";
import * as React from 'react';
export const RootNavigator = () => {
    const { userToken, isLoading } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getValue();
    }, []);

    async function getValue() {
        try {
            const value = await AsyncStorage.getItem('@token');
            if( value != null ){
                dispatch(restoreToken(value));
                console.log('Data restored correctly', value);
            } else {
                console.log('no data');
                dispatch(restoreToken(null));
            }
            
        } catch (e) {
            console.log(e);
        }
    };

    if(isLoading) {
        return <Splash />;
    }
    return(
        <NavigationContainer>
            {userToken ? <MyDrawer /> : <AuthStack />}
        </NavigationContainer>
    )
}