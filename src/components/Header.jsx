import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import {colors} from "../global/colors.js";

const Header = () => {
    const {width, height} = useWindowDimensions();


    return (
        <View style={width<=300?styles.headerContainerSmall: styles.headerContainer}>
            <Image 
                source={{ uri: 'https://i.postimg.cc/gk6hQ9X1/logoquickbite.webp' }} 
                style={width<=300?styles.logoSmall: styles.logo} 
                resizeMode="contain" 
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        maxHeight:230,
        height: "35%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.beigeOscuro,
        padding: 10
    },
    headerContainerSmall:{
        maxHeight:200,
        height: "35%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.beigeOscuro, 
        padding: 10
    },
    logo: {
        width: "85%", 
        height: "85%", 
    
    },
    logoSmall: {
        width: "60%", 
        height: "60%", 
    }
    
})