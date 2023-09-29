import { StyleSheet, SafeAreaView, ScrollView, Platform} from 'react-native';
import { dogs } from '../data';
import { Card } from './Card';

export const CardsContainer = () => {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView 
            contentContainerStyle={{
            marginHorizontal:18,
            }}
            style={{
            marginTop: Platform.OS === 'android' ? 30 : 0 
            }}>
            {dogs.map(({name, description, imageUrl}, index) => {
            return(
                <Card 
                key={index}
                name={name}
                description={description}
                imageUrl={imageUrl}
            />
            )
            })}
        </ScrollView>
    </SafeAreaView>
    )
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center',
        },
    });