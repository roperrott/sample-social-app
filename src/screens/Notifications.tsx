import * as React from 'react';
import { Text, View } from "react-native"
import { globalStyles } from "../styles/global";
import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";



export const Notifications = () => {
    const reducer = (state, {type, title, body, to}) => {
        switch(type) {
            case 'SET_TITLE': {
                return {...state, title}
            };
            case 'SET_BODY': {
                return {...state, body}
            };
            default:
        }
    };
    
    const [state, dispatch] = React.useReducer(reducer, {
        to: 'ExponentPushToken[tfhZTRBn-uR99PvIaxxzrH]',
        sound: 'default',
        title: '',
        body: '',
        data: {},
    });
    
    const sendPushNotification = async () => {
        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        }
     )
    };

    const sendMultiplePushNotifications = async () => {
        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                host: 'exp.host',
                accept: 'application/json',
                'accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: [
                    'ExponentPushToken[tfhZTRBn-uR99PvIaxxzrH]',
                    'ExponentPushToken[tfhZTRBn-uR99PvIaxxzrH]',
                    'ExponentPushToken[tfhZTRBn-uR99PvIaxxzrH]',
                    'ExponentPushToken[tfhZTRBn-uR99PvIaxxzrH]',
                ],
                title: 'Multiple Push Notifications',
                body: ':)',
            }),
        }
     )
    };
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Notifications</Text>
            <MyInput label="Title" onChangeText={text => dispatch({type: 'SET_TITLE', title: text})}/>
            <MyInput label="Body" onChangeText={text => dispatch({type: 'SET_BODY', body: text})}/>
            <MyButton title="Send" onPress={sendPushNotification}/>
        </View>
    );
};