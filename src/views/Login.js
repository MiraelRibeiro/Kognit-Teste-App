import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; 
import { useNavigation } from "@react-navigation/native";


import ValidarLogin from '../functions/validarLogin';

export default Login = () => {

    const navigation = useNavigation();
    const user = 'mirael';
    const password = '123456';

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ValidarLogin)
    });

    function FazerLogin(dados){
        if(dados.usuario != user.trim() || dados.senha != password.trim()){
            alert('Erro ao acessar com este usuário! Verifique o usuario e senha')
        }
        else{
            navigation.navigate('Tarefas');
        }    
    }

    return(
        <View style={styles.container}>
        <View >
            <Text style={styles.formTitle}>Acessar Tarefas</Text>
        </View>

        <View style={{ width: '100%' ,padding: 10, alignItems: 'center'}}>
            <Controller
            control={control}
            name='usuario'
            render={({ field: {onChange, value } }) => (
                <TextInput autoCapitalize='none' placeholder='Usuário: ' style={styles.formInput} onChangeText={onChange} defaultValue={value} />
            )}
            />
            {errors.usuario && <Text style={styles.labelErrors}>{errors.usuario?.message}</Text>} 

            <Controller
            control={control}
            name='senha'
            render={({ field: {onChange, value } }) => (
                <TextInput autoCapitalize='none' secureTextEntry placeholder='Senha: ' style={styles.formInput} onChangeText={onChange} defaultValue={value} />
            )}
            />
            {errors.senha && <Text style={styles.labelErrors}>{errors.senha?.message}</Text>} 
        </View>

        <Pressable style={styles.formButton} onPress={handleSubmit(FazerLogin)}>
            <Text style={styles.formTextButton}>Entrar</Text>
        </Pressable>
        </View>
    );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  formTitle:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue',
    margin: 10,
    marginBottom: 30
  },

  formButton:{
    backgroundColor: 'blue',
    width: '80%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  formTextButton:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },

  formInput:{
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    width: '80%',
    marginBottom: 15,
    padding: 7
  },

  labelErrors:{
    color: '#ff375b',
    marginBottom: 8
  }

});

