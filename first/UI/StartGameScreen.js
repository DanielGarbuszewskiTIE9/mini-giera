import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen=(props)=>{
    return(
        <View>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles =StyleSheet.create({
    inputStyle
})

export default StartGameScreen