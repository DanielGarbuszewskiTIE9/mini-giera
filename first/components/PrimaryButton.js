import { View, Text,Pressable,StyleSheet } from 'react-native'

const PrimaryButton=(props)=>{

    function pressHandler(){
        console.log('la')
    }

    return(
        <Pressable onPress={pressHandler}>
        <View style={styles.btnContainer} android_ripple={{color:'#ffffff'}}>
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