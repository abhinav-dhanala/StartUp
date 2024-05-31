import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
const SplashScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <View >
                <Image source={require('./assets/img.png')} style={styles.logo}></Image>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:100,
        height:100,
        resizeMode:"cover",
    }
})
export default SplashScreen