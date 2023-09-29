import * as React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/colors';
import { MyButton } from '../components/MyButton';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

export const Onboarding = () => {
    const navigator = useNavigation();
    const registerForPushNotificationsAsync = async () => {
        let token;
        if(Device.isDevice) {
            const { status: existingStatus } =
                await Notifications.getPermissionsAsync();

            let finalStatus = existingStatus;

            if(existingStatus !== 'granted') {
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            };

            if(finalStatus !== 'granted') {
                alert('Failed to get token');
                return;
            } 
            token = (await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig.extra.eas.projectId,
            })).data;
            console.log('this is the token', token);
        } else {
            return;
        };

        if(Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: 'FF231F7C',
            });
        }
        return token;
    };

    const handlePress = () => {
        registerForPushNotificationsAsync()
            .then( async token => {
                await AsyncStorage.setItem('@pushToken', token);
                navigator.navigate('Home');
            })
            .catch( err => {
                console.log(err);
                navigator.navigate('Home');
            });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Wellcome to Keros App</Text>
            <View style={styles.featureContainer}>
                <Image 
                    style={styles.icon}
                    source={require('../../assets/arrows.png')}
                />
                <View style={{ flex: 1}}>
                    <Text style={styles.subTitle}>Manage daily tasks</Text>
                    <Text style={styles.subHeadline}>Our App helps you to incresase your productivity</Text>
                </View>
            </View>
            <View style={styles.featureContainer}>
                <Image 
                    style={styles.icon}
                    source={require('../../assets/bell.png')}
                />
                <View style={{ flex: 1}}>
                    <Text style={styles.subTitle}>Notifications</Text>
                <   Text style={styles.subHeadline}>Please allow us to notify you when it's time to do your tasks</Text>
                </View>
            </View>
            <View style={styles.featureContainer}>
                <Image 
                    style={styles.icon}
                    source={require('../../assets/design.png')}
                />
                <View style={{ flex: 1}}>
                    <Text style={styles.subTitle}>Minimal Design</Text>
                <   Text style={styles.subHeadline}>Enjoy a simple design that allows you to focus only on what you have to do.</Text>
                </View>
            </View>
            <MyButton title='Continue' onPress={handlePress}/>
        </View>
    )
};

const iphoneHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 150,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: iphoneHeight > 800 ? 70 : 50,
        marginTop: 100,
        color: Colors.secondary,
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 22,
        color: Colors.secondary,
    },
    subHeadline: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        color: Colors.dark,
    },
    featureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    icon: {
        width: 42,
        height: 42,
        marginRight: 20,
        resizeMode: 'contain',
    },
});