import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Colors } from "../constants/colors"
import { FC } from "react"

type MyButtonProps = {
    title: string,
    onPress?: () => void,
}
export const MyButton: FC <MyButtonProps> = ({ title, onPress }) => {
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 45,
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.light,
        fontSize: 16,
        fontWeight: 'bold',
    }
})