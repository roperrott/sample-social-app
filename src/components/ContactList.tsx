import * as React from 'react';
import {
    Button,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity
} from 'react-native';
import { MyInput } from './MyInput';
import { getRandomPhoto } from '../utils/randomPhoto';
import { Colors } from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { contactStore } from '../reducers/contactReducer';
export const ContactList = () => {
    const { contacts } = React.useContext(contactStore);
    if(contacts.length === 0) return <Text style={styles.informationText}>You don't have any contact yet!</Text>;
    return(
        <ScrollView>
            {contacts.map((contact: any, index: React.Key | null | undefined) => (
                <Contact 
                    key={index} 
                    contact={contact} 
                />
            ))}
        </ScrollView>
    );
}

const Contact = ({ contact }) => {
    const { handleChangeContact, handleDeleteContact} = React.useContext(contactStore);
    const [isEditing, setIsEditing] = React.useState(false);
    let contactContainer;
    const memoPhoto = React.useMemo(() => getRandomPhoto(), []);
    if(isEditing) {
        contactContainer = (
            <View>
            
                <MyInput 
                    value={contact.name}
                    onChangeText={text => handleChangeContact({...contact, name: text})}
                />
            </View>
        
        );
    } else {
        contactContainer = (  
            <View>
                <Text style={styles.name}>{contact.name}</Text>
            </View>
        );
    }
    return(
        <View style={styles.contactContainer} >
            <View style={styles.row}>
                <Image 
                    source={memoPhoto} 
                    style={styles.image} 
                    resizeMode='contain'/>
                {contactContainer}
            </View>
            <View style={styles.row}>
                {isEditing ? (
                    <Button title='Save' onPress={() => setIsEditing(false)} />
                ) : (
                    <Pressable onPress={() => setIsEditing(true)}>
                        <FontAwesome 
                            name="edit"
                            size={24}
                            color={Colors.secondary}
                            style={styles.actionButton}
                        />
                    </Pressable>
                )}
                <Pressable onPress={() => {
                    console.log(contact.id);
                    handleDeleteContact(contact.id);
                    }}>
                    <FontAwesome 
                        name="trash"
                        size={24}
                        color={Colors.secondary}
                        style={styles.actionButton}
                    />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: Colors.gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-between',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.dark,
    },
    actionButton: {
        marginRight: 15,
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editInputContainer: {
        width: '100%',
    },
    informationText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 17,
        color: Colors.dark,
    }
})
