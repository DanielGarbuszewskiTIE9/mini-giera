import { View, Text,Pressable,StyleSheet } from 'react-native'

const PrimaryButton=(props)=>{

    return(
        <Pressable onPress={props.pressHandler} android_ripple={{color:'#BF29AC'}}>
        <View style={styles.btnContainer}>
            <Text style={styles.btnTeksto}>{props.children}</Text>
        </View>
        </Pressable>
    )
}

export default PrimaryButton


const styles=StyleSheet.create({
    btnContainer:{
        backgroundColor:'#52174B',
        borderRadius: 28,
        padding:10,
        margin:10
    },
    btnTeksto:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:18
    }
})