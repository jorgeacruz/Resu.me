import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import Ingredient from '../components/ingredient';

export default function Index() {

//estado do pressable  
const [selected, setSeleted] = useState<string[]>([])

function handleToggleSelected(value:string){
  if(selected.includes(value)) {
    return setSeleted((state) => state.filter((item) => item !== value))
  }

  setSeleted((state) => [...state, value])
}

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
                <Ingredient 
                key={index} 
                name=""
                image="" 
                selected={selected.includes(String(index))}
                onPress={() => handleToggleSelected(String(index))}/>
            ))}
    
        </ScrollView>
      
   </View>
  );
}