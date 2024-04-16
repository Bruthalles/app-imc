import React from "react"
import { View, Text } from "react-native"

import styles from "./style_title"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.texTittle}> ONEBITHEALTH </Text>
        </View>
    )
}