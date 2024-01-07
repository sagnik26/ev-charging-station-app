import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
              await startOAuthFlow();
       
            if (createdSessionId) {
              setActive({ session: createdSessionId });
            } else {
              // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }

  return (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    }}> 
    <Text style={styles.titleText}>EV Station</Text>
    <View>
        <Image 
            source={require('../../../assets/images/charging-2.webp')}
            style={styles.logoImage} 
        />
    </View>
    <View style={{padding: 20}}>
    <Text style={styles.heading}>Your ultimate ev charging station finder app</Text>
    <Text style={styles.desc}>Find ev charging station near you</Text>
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
        <Text 
            style={{ 
                color: Colors.WHITE, 
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: 17, 
            }}
        >Login with Google</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logoImage: {
        width: 500,
        height: 200,
        marginTop: 5
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40
    },
    heading: {
        fontSize: 25,
        fontFamily: 'outfit-bold',
        textAlign:'center',
        marginTop: '20'
    },
    desc: {
        fontSize: 17,
        fontFamily: 'outfit',
        textAlign:'center',
        marginTop: '15',
        color: Colors.GRAY
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 60
    }
})

export default LoginScreen
