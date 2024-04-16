import React from "react"
import { View, Text , TouchableOpacity, Share} from "react-native"

import styles from "./style_imc"
export default function ResultImc(props){

    const onShare = async() => {

        const result = await Share.share({
            message:"Meu imc hoje é:  " + props.resultImc,
        })
    }

    return(
        <View style ={styles.bxImc}>
            <View style ={styles.boxShareButton}>
                {props.resultImc != null ?

                <TouchableOpacity     //botao com opacidade no clique

                    onPress ={onShare}
                    style ={styles.shared}>

                    <Text style ={styles.shaText}> Share 
                    </Text>
                </TouchableOpacity>
                :
                <View/>

                }
            </View>
            
            <Text style ={styles.frase}>{props.messageResultImc}</Text>
            <Text style ={styles.resultado}>{props.resultImc}</Text>
        </View>
    )
}