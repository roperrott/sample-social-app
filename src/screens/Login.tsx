import { Text, View } from "react-native"
import { globalStyles } from "../styles/global";
import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { useState } from "react";
import { FC } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signIn } from "../features/auth/auth";

export const Login: FC<{navigation:any}> = ({ navigation }) => {
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    async function save(value: string) {
        try {
            await AsyncStorage.setItem('@token', value);
            dispatch(signIn(value));
            console.log('Data saved correctly');
        } catch (e) {
            console.log(e);
        }
    }
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Login </Text>
            <MyInput label={"Email"} value={token} onChangeText={setToken} />
            <MyInput label={"Password"} secureTextEntry />
            <MyButton 
                title={"Sing In"} 
                onPress={() => save(token)}/>
            <MyButton 
                title={"Sing Up"} 
                onPress={() => navigation.navigate('SingUp')}
            />
        </View>
    );
};