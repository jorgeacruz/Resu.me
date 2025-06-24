import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { router } from 'expo-router';
import { supabase } from '@/libs/supabase';

export default function HeaderHome() {

    async function handleLogout() {
      const Logout = await supabase.auth.signOut()
      router.replace('/')
    }

    return (
   <View style={styles.body}>
      <FontAwesome name="user" size={24} color="#fff" />
      <View>
         <Text style={styles.Title}>Jorge Cruz</Text>   
         <Text style={styles.SubTitle}>Front-End Engineer</Text>   
      </View>
      <TouchableOpacity onPress={handleLogout}>
         <FontAwesome name="lightbulb-o" size={24} color="#fff" />
      </TouchableOpacity>
   </View>
  );
}


const styles = StyleSheet.create({
  body: {
    width:'100%',
    height:150,
    paddingHorizontal:50,
    paddingVertical:20,
    backgroundColor:'#252525',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection:'row'
  },
  Title:{
    paddingTop:20,
    color:'#fff',
    textAlign:'center',
    fontWeight:'300',
    fontSize:30
  },
  SubTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'300',
    fontSize:15
  }
});