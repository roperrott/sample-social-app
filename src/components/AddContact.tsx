import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { MyInput } from './MyInput';
import { Colors } from '../constants/colors';
import { contactStore } from '../reducers/contactReducer';

export const AddContact = () => {
    const { handleAddcontact } = React.useContext(contactStore);

    const [name, setName] = React.useState('');

    const handleAdd = () => {
        setName('');
        handleAddcontact(name);
    };
    
    return(
        <View style={styles.container}>
            <View style={{width: '80%'}}>
                <MyInput 
                    label={"Add Contact"}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <Button  
                title='Add' 
                color={Colors.primary}
                onPress={handleAdd}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingVertical: '5%',
    }
})