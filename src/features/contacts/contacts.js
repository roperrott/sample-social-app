import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            state = action.payload;
        },
        addContact: (state, action) => {
            state.push(action.payload);
        },
        deleteContact: (state, action) => {

            const index = state.findIndex(contact => contact.id === action.payload.id);
            state.splice(index, 1);
        },
          
        //     case 'UPDATE': {
        //         const newContacts = contacts.map(contact => 
        //             (contact.id === action.contact.id ? action.contact : contact )
        //         );
        //         const jsonValue = JSON.stringify(newContacts);
        //         AsyncStorage.setItem('@contacts', jsonValue);
        //         return newContacts;
        //     };
        //     default: {
        //         throw new Error('Unhandled action type: ' + action.type);
        //     };
        // }
    }
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;