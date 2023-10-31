import { View, StyleSheet, TouchableOpacity, Image, Text} from "react-native"
import PeachLogo from "../assets/peach.png"
import PeachGuardLogo from "../assets/security-guard.png"

export const ChooseViewPage = ({navigation}: any) => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.buttonContainer}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Peach View</Text>
                    <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate("DateTitlePage")}>
                        <Image source={PeachLogo} style={{ width: 80, height: 80 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Peach Guard</Text>
                    <TouchableOpacity style={styles.touchableStyle}>
                        <Image source={PeachGuardLogo} style={{ width: 80, height: 80 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitleContainer: {
        alignItems: 'center',
        marginHorizontal: 20
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#29B7AE'
      },
    touchableStyle: {
        marginHorizontal: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});
