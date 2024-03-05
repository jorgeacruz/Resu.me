import { Pressable, Text, Image } from 'react-native';
import { styles } from './styles'

export default function Ingredient() {
 return (
   <Pressable style={styles.container}>
    <Image source={require("@/src/assets/tomato.png")} style={styles.image}/>
        <Text style={styles.title}>Maça</Text>
   </Pressable>
  );
}