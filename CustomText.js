import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { loadAsync } from 'expo-font'

export default function CustomText(props) {
    const [loading, setLoading] = useState(true)
    const loadFontUp = async () => {
        await loadAsync({
            Montserrat: require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
            MontserratBold: require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
            MontserratItalic: require('./assets/fonts/montserrat/Montserrat-Italic.ttf'),
        })
        setLoading(false)
    }

    useEffect(() => {
        loadFontUp()
    }, [])

    const _chooseFont = () => {
        if (props.style) {
            if (props.style.fontWeight === 'bold') {
                return "MontserratBold"
            } else if (props.style.fontStyle === 'italic') {
                return "MontserratItalic"
            } else {
                return "Montserrat"
            }
        }
    }

    return (
        <>
            {loading && <ActivityIndicator />}
            {!loading && <Text style={[props.style, { fontFamily: _chooseFont() }]}>{props.children}</Text>}
        </>
    )
}