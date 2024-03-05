import { View, Text } from 'react-native';
import styles  from './styles';

export default function Index() {
 return (
   <View style={styles.container}>
        <Text style={styles.title}>Escolha os Produtos</Text>
        <Text style={styles.subtitle}>Descubra receitas baseadas nos produtos que escolheu</Text>
   </View>
  );
}