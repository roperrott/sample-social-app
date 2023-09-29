import { TextInput, StyleSheet, View, Text} from "react-native";
import { Colors } from "../constants/colors";
import { FC } from "react";

type MyInputProps = {
    label?: string,
    value?: string,
    onChangeText?: (text:string) => void,
    secureTextEntry?: boolean,
}
export const MyInput: FC<MyInputProps> = ({
    label, 
    value,
    onChangeText,
    secureTextEntry,
}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder={label}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 45,
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: Colors.light,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
    }
})