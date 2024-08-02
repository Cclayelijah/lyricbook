import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, Platform } from 'react-native'
import Colors from '@/constants/Colors'
import logo_image from '@/assets/images/logo.png'
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';


const logoImage = Image.resolveAssetSource(logo_image).uri;

const Page = () => {

    const openLink = () => {
        Linking.openURL("https://elijahdev.com/")
    }

    return (
        <View style={{
                ...defaultStyles.container, 
                justifyContent: 'center', 
                alignItems: 'center',
            }}>
            <Image source={{ uri: logoImage }} style={styles.welcome} />
            <Text style={styles.headline}>Welcome to Lyric Book</Text>
            <Text style={styles.description}>
                Read our{' '}
                <Text style={styles.link} onPress={openLink}>
                Privacy Policy
                </Text>
                . {'\n\n Tap "Agree & Continue" to accept the '}
                <Text style={styles.link} onPress={openLink}>
                Terms of Service
                </Text>
                . 
            </Text>
            <Link href={'/tutorial'} replace asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Agree & Continue</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
};

const styles = StyleSheet.create({
    welcome: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 80
    },
    headline: {
        fontSize: 24,
        fontWeight: 300,
        marginBottom: 80
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 80,
        color: Colors.primary
    },
    link: {
        color: Colors.blue
    },
    button: {
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: Colors.blue,
        fontWeight: 'bold'
    }
})

export default Page;