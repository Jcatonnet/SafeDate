import { View, StyleSheet, TouchableOpacity, Image} from "react-native"
import PeachLogo from "../assets/peach.png"
import PeachGuardLogo from "../assets/security-guard.png"

export const ChooseViewPage = ({navigation}: any) => {
    return (
        <View style={styles.pageContainer}>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate("DateTitlePage")}>
                <Image
                source={PeachLogo}
                style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle}>
                <Image
                source={PeachGuardLogo}
                style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    touchableStyle: {
        marginHorizontal: 20
    }
    
});
