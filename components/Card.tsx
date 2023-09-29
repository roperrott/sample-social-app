import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { dogs } from '../data';

type CardProps = {
  name:string;
  description?:string;
  imageUrl: string;
  size?: number;
}
export const Card: FC<CardProps> = ( {name, description, imageUrl, size }) => {
  return(
    <View 
      style={{
        backgroundColor: 'white', 
        padding: 10,
        borderRadius: 30,
        width: 360,
        height: 526,
        marginBottom: 30,
      }}> 
      <Image
        source={{uri: imageUrl}}
        style={{
          width: '100%', 
          height: 420,
          borderRadius: 20,
        }}
      />
      <Text
        style={{
          fontSize: 28, 
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 18, 
          marginTop: 10,
          color: 'gray',
        }}
      >
        {description}
      </Text>
    </View>
  )
}