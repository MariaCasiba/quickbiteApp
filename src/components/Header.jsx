import { StyleSheet, View, Image } from 'react-native';
import {colors} from "../global/colors.js";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image 
                source={{ uri: 'https://i.postimg.cc/gk6hQ9X1/logoquickbite.webp' }} 
                style={styles.logo} 
                resizeMode="contain" 
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height:250,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.beigeOscuro
    },
    logo: {
        width: 190, 
        height: 190, 
        margin: 25
    },
    
})