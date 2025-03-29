import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      },
      
      recordButton:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#000',
        padding:10,
        borderRadius:5,
        marginVertical:5
      },
      clearButton:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#ff4d4d',
        padding:10,
        borderRadius:5,
        marginVertical:5
      },
      singleTitle:{
        color:'#000',
        fontSize:16,
        paddingVertical:5
      },
      viewButton:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        gap:5
      },
      addButton:{
        width:190,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fb0',
        padding:10,
        borderRadius:5,
        marginVertical:10
      },
      removeButton: {
        width:190,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#ff4d4d",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
});