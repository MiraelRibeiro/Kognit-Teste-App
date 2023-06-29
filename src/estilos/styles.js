import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
     
    coverView:{
      width:'100%',
      height:80,
      backgroundColor:'rgba(0,0,0,0.5)'
    },
  
    textHeader:{
      textAlign:'center',
      color:'white',
      fontSize:20,
      marginTop:30
    },
  
    tarefaSingle:{
        marginTop:20,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'black',
        flexDirection:'row',
        paddingBottom:10
    },
  
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.5)'
    },
  
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      paddingHorizontal: 90,
      paddingBottom:10,
      paddingTop:30,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
  
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex:5
    },
  
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginTop:15
    },
  
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  
    modalText: {
      marginBottom: 5,
      textAlign: 'center'
    },
  
    btnAddTarefa:{
      width:200,
      padding:8,
      backgroundColor:'gray',
      marginTop:20
    },
  
    btnAdicionarTarefa:{
      position:"absolute",
      right:20,
      bottom:20,
      height:50,
      width:50,
      borderRadius:25,
      backgroundColor:"gray"
    },
  
    textoBtnTarefa:{
      color:"white",
      position:"relative",
      textAlign:"center",
      top:3,
      fontSize:15
    },

    titleText:{fontWeight:'bold', fontSize: 18},

    textTarefa: {fontSize: 16, fontFamily: 'Cochin'}

});