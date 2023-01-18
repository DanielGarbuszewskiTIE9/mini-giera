import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from 'react'

const StartGameScreen=(props)=>{

    const [enteredNumber,setEnteredNumber]=useState('')

    function pressHandler(){
        //console.log(enteredNumber)
        const chosenNumber=parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber<=0){
            Alert.alert('Invalid number','The number must be between 1 and 99'
            [{text:'Okay',style:'destructive',onPress:{resetHandler}}]
            )
        return;
        }
    }

    function resetHandler(){
        setEnteredNumber('')
    }

    function enterNumberHandler(event){
        setEnteredNumber(event)
    }

    return(
        <View style={styles.vievStyle}>
        <TextInput style={styles.inputStyle}
            maxLength={2} keyboardType='number-pad'
            autoCorrect={false}
            onChangeText={enterNumberHandler}
            value={enteredNumber}
        />
        <PrimaryButton pressHandler={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton pressHandler={pressHandler}>Confirm</PrimaryButton>
        </View>
    )
}

const styles =StyleSheet.create({
    inputStyle:{
        margin:10,
        padding:20,
        borderRadius:8,
        backgroundColor:'#52174B',
        fontSize:18,
        color:'#ffffff'
    },
    vievStyle:{
        margin:50,
        backgroundColor:'#7C66CA',
    }

})

export default StartGameScreen