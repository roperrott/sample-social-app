import { FC } from "react";
import { View, Text } from "react-native";
import { Colors } from "../constants/colors";

type CustomHeaderProps = {
    title: string,
}
export const CustomHeader: FC<CustomHeaderProps> = ({ title }) => {
    return(
        <View 
        style={{
            height: 80,
            width: '100%',
            backgroundColor: Colors.primary,
            padding: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}
        >
            <Text 
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: Colors.light,
                }}
            >
                {title}
            </Text>
        </View>
    )
}