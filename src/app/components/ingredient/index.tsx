import { Pressable, PressableProps, Text, Image } from 'react-native';
import { styles } from './styles'

//Propriedades do Pressable
export type IngredientsProps = {
  name: string,
  image:string,
  selected:boolean
}
export default function Ingredient({name, image, selected = false, ...rest}: IngredientsProps & PressableProps) {

 return (
   <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image source={require("@/src/assets/tomato.png")} style={styles.image}/>
      <Text style={styles.title}>Maça</Text>
   </Pressable>
  );
}