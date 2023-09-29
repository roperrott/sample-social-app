import { Text, View } from "react-native"
import { globalStyles } from "../styles/global";

export const Settings = () => {
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Settings</Text>
        </View>
    );
};