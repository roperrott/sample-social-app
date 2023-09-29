import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../features/contacts/contacts';

export const ContactsRedux = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const handleLongPress = (id) => {
        dispatch(deleteContact(id))
    };
    console.log(contacts);
    return(
        <View style={globalStyles.simpleContainer}>
            <Text>Contacts Redux</Text>
            {contacts.map( (i, index) => (
                <Pressable key={index} onLongPress={() => handleLongPress(i.id)}>
                    <Text style={globalStyles.title}>{i.name}</Text>
                </Pressable>
            ))}
        </View>
    );
};
