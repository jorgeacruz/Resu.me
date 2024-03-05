import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import Ingredient from '../components/ingredient';

export default function Index() {
 return (
   <View style={styles.container}>
        <Text style={styles.title}>
          Escolha{"\n"}
          <Text style={styles.subtitle}>os Produtos</Text> 
        </Text>
        <Text style={styles.message}>
          Descubra receitas baseadas nos produtos que escolheu
        </Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ingredients}>
            {
              Array.from({ length:100 }).map((item, index) => (
                <Ingredient key={index}/>
              ))
            }
    
        </ScrollView>
      
   </View>
  );
}