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

export default StartGameScreen