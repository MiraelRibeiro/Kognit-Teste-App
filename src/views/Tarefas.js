import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';
import styles from '../estilos/styles';

export default function Tarefas() {

  const image = require('../resources/bg.jpg');
  
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';

  console.disableYellowBox = true;

  const [tarefas, setarTarefas] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
        
    (async () => {
      try {
        await axios({
          method: 'get',
          url: `${baseUrl}`,
        }).then((response) => {
          if(response.data != null){
            setarTarefas(response.data);
            setLoading(false);
          }
        });
      } catch (error) {    
        console.log(error);
        setLoading(false);
      }
    })();
    
},[])

  return (
    
    <ScrollView style={{flex:1}}>
        <ImageBackground source={image} style={styleImagem.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista de Tarefas</Text>
            </View>
        </ImageBackground>      

        {
          loading 
          ? 
            <ActivityIndicator size='large' />
          :
          tarefas.map(function(val){
            return (
              <View style={styles.tarefaSingle} key={val.id}>
                <View style={{flex:1,width:'100%',padding:10}}>
                  
                  <Text style={styles.textTarefa}>
                    <Text style={styles.titleText}>Título: </Text>
                    {val.title}
                  </Text>
                  <Text style={styles.textTarefa}>
                    <Text style={styles.titleText}>Tarefa: </Text>
                    {val.body}
                  </Text>
                </View>                
              </View>
            );
          })
          
        }
        </ScrollView>
       
  );
}

const styleImagem = StyleSheet.create({
  image: {
    width:'100%',
    height: 80,
    resizeMode: "cover"
  }  

});
