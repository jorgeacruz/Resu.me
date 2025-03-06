import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function HeaderHome() {
 
    return (
   <View style={styles.body}>
      <Image source={require('@/app/images/logo.png')} style={{height:40, width:150}}/>
      <Text style={styles.headerTitle}>Olá! Fulano</Text>
   </View>
  );
}