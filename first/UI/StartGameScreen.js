import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen=(props)=>{
    return(
        <View style={styles.vievStyle}>
        <TextInput style={styles.inputStyle}
            maxLength={2} keyboardType='number-pad'
            autoCorrect={false}
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
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