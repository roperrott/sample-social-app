import * as React from 'react';
import { View } from "react-native";
import { globalStyles } from "../styles/global";
import { AddContact } from "../components/AddContact";
import { ContactList } from '../components/ContactList';
import { ContactsProvider } from '../reducers/contactReducer';

export const Contacts = () => {
  
    return(
        <ContactsProvider>
            <View style={globalStyles.simpleContainer}>
                <AddContact />
                <ContactList />
            </View>
        </ContactsProvider>
    );
};
