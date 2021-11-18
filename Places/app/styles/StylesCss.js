import {StyleSheet} from 'react-native'

export const StylesCss = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#4169E1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    
      },
      infoLogin: {
        marginHorizontal: 0,
        width: 400,
        height: 400,
        backgroundColor: 'grey',
        alignItems: 'center',
        borderRadius: 50,
      },
    
      textConnexion: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 25,
        marginBottom: 50,
      },
      buttonContenair: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 30,
      },
      textlogo: {
        color: 'white',
        fontSize: 30,
        marginTop: 25,
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      marker: {
        width: 30,
        height: 30,
      },
      text: {
        color: 'white',
        fontSize: 16,
        opacity: 0.5,
        marginTop: 10,
        marginLeft: 130,
      },
      button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
      },
    
      input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height:45,
        marginTop: 10,
        borderColor: 'white',
        borderRadius: 23,
        paddingVertical: 2,
        borderWidth: 1,
        paddingHorizontal:10,color:'white'
      },

      //// FlaslitData pour le composent HomeScreen
      flatlistData : {
    
      },
      flatlistItem : {
        color :'white',
       padding:5,
        fontSize:20,
        
      },
      search: {
        paddingHorizontal: 10,
        height: 30,
        width: '100%',
        color: 'black',
        fontSize:20,
        textAlign:'center',
        fontStyle:'italic',
        
      },
      butAjouFiltre: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 10,
      },
      //"##########################" Ajout Lieu
      ajoutContainer:{
        flex:1,
        backgroundColor:'grey',
        
      },
      inputAjout:{
        alignSelf:'center',
        width: '80%',
        height:45,
        marginTop: 20,
        borderColor: 'white',
        borderRadius: 23,
        padding:10,
        borderWidth: 1,
        fontSize:20,
      },
      /// Lineaire gradient
      
      image_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'100%'
      },
});