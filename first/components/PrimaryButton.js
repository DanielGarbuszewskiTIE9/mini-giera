import { View, Text,Pressable,StyleSheet } from 'react-native'

const PrimaryButton=(props)=>{

    function pressHandler(){
        console.log('la')
    }

    return(
        <Pressable onPress={pressHandler}>
        <View style={styles.btnContainer}>
            <Text style={styles.btnTeksto}>{props.children}</Text>
        </View>
        </Pressable>
    )
}

export default PrimaryButton


const styles=StyleSheet.create({
    btnContainer:{
        backgroundColor:'#25979c',
        borderRadius: 28,
        padding:10,
        margin:10
    },
    btnTeksto:{
        textAlign:'center'
    }
})