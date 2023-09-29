import * as React from 'react';
import { View } from "react-native"
import { globalStyles } from "../styles/global";
import { useDrawerStatus } from "@react-navigation/drawer";
import { Card } from "../components/Card";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { MyButton } from '../components/MyButton';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Home = () => {
    const [date, setDate] = React.useState<any>(new Date());
    const navigation = useNavigation<any>();
    const isDrawerOpen = useDrawerStatus();
    const [notification, setNotificationType] = React.useState('default');

    const checkIsFirstLaunch = async () => {
        const firstLaunch = await AsyncStorage.getItem('@firstLaunch');
        if(firstLaunch) {
            return;
        } else {
            await AsyncStorage.setItem('@firstLaunch', 'true');
            navigation.navigate('Onboarding');
        }
    };
    React.useEffect(()=> {
        const suscription = Notifications.addNotificationResponseReceivedListener(
            response => {
                console.log("notification received", response);
                setNotificationType(response.notification.request.content.title);
            }
            
        );
        return () => suscription.remove();
    }, []);

    const handleNotification = async () => {
        const trigger = new Date(date).getTime() + 24 * 60 * 60 * 1000 ;
        try {
            const id = await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Code testing',
                    body: 'This is a test notification',
                },
                trigger: {
                    seconds: 5,
                    repeats: false,
                },
            });
            alert(`Notification scheduled!, ${id}`)
        } catch (err) {
            alert('The notification faile to be schedule, make sure the hour is valid.');
        }
    }

    React.useEffect(() => {
        checkIsFirstLaunch();
    }, []);

    return(
        <View style={globalStyles.screenContainer}>
            <DateTimePicker 
                value={date}
                style={{width: '25%'}}
                mode='time'
                onChange={(event, selectedDate) => setDate(selectedDate)}
            />
            <MyButton title='Schedule Notification' onPress={handleNotification}/>
            <Card />
        </View>
    );
};