import { Text, View } from "react-native"
import { globalStyles } from "../styles/global";
import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { FC } from "react";

export const SingUp: FC<{navigation:any}> = ({ navigation }) => {
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>SingUp </Text>
            <MyInput label={"Email"} />
            <MyInput label={"Password"} secureTextEntry />
            <MyButton title={"Sing Up"}/>
            <MyButton 
                title={"Login"} 
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};