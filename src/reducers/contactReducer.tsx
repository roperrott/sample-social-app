import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialContacts = [
    {
        id: 0,
        name: 'Sara Lee',
    },
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jack Lee',
    },
];

const contactStore = React.createContext([]);
const { Provider } = contactStore;

const ContactsProvider = ({ children }) => {
    const [contacts, dispatch] = React.useReducer(contactReducer, []);

    React.useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        const contacts = await AsyncStorage.getItem('@contacts');
        if(contacts === null) {
            await AsyncStorage.setItem('@contacts', JSON.stringify(initialContacts));
            dispatch({type: 'SET_CONTACTS', contacts: initialContacts});
        } else {
            dispatch({type: 'SET_CONTACTS', contacts: JSON.parse(contacts)});
        }
    }

    const handleAddcontact = (name: string) => {
        dispatch({type: "ADD", id: Math.random(), name});
    };
    const handleDeleteContact = (id: number) => {
        dispatch({type: "DELETE", id});
    };
    const handleChangeContact = (contact: {id: number, name:string}) => {
        dispatch({type: "UPDATE", contact});
    };
    return (
        <Provider value={{
            contacts,
            handleAddcontact,
            handleDeleteContact,
            handleChangeContact
        }}>
            {children}
        </Provider>
    )
};

export { ContactsProvider, contactStore };

export const contactReducer = (contacts, action) => {
    switch (action.type){
        case 'SET_CONTACTS': {
            return action.contacts;
        };
        case 'ADD': {
            const newContacts = [...contacts, { id: action.id, name: action.name }];
            const jsonValue = JSON.stringify(newContacts);
            AsyncStorage.setItem('@contacts', jsonValue);
            return newContacts;
        };
        case 'DELETE': {
            const newContacts = contacts.filter(contact => contact.id !== action.id);
            const jsonValue = JSON.stringify(newContacts);
            AsyncStorage.setItem('@contacts', jsonValue);
            return newContacts;
        };
        case 'UPDATE': {
            const newContacts = contacts.map(contact => 
                (contact.id === action.contact.id ? action.contact : contact )
            );
            const jsonValue = JSON.stringify(newContacts);
            AsyncStorage.setItem('@contacts', jsonValue);
            return newContacts;
        };
        default: {
            throw new Error('Unhandled action type: ' + action.type);
        };
    }
};
