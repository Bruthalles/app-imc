import React, {useState} from "react"
import {  
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Keyboard,
    Pressable,
    Vibration } from "react-native"

{/*importando modulos*/}

import ResultImc from "./ResultImc/index_imc" 
import styles from "./style_form"             

export default function Form(){ 

    {/*definindo useStates necessarios*/}

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setError] = useState(null)

function verificar(){
    if(imc == null){
        Vibration.vibrate();
        setError("Campo Obrigatório")
    }
}

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}
    
function validation (){
    if (weight != null &&  height != null){

        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é:")
        
        setTextButton("Calcular novamente")
        setError(null)
    }
    else{
    verificar()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura !")
    }
    
    
}


{/*area de criaçao*/}


    return(
        <View style={styles.formContext}>

            {/*view princpal*/}

            <View style={styles.form}>

                <Text style={styles.formLabel} >Altura </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder= "Ex. 1.65"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel} > Peso </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder= "Ex. 78.54"
                keyboardType="numeric"
                ></TextInput>

                {/*botao com opacidade*/}
                
                <TouchableOpacity  

                style= {styles.buttonCalc}
                onPress={() => {validation()}}
                > {/*chamando funçao para o botao*/}

                    <Text style= {styles.textButtonCalc}>{textButton}</Text>
                
                </TouchableOpacity>
            </View>

            {/*view separada paraa o resultado*/}

            <ResultImc messageResultImc = {messageImc} resultImc={imc} />

        </View>
    )
}