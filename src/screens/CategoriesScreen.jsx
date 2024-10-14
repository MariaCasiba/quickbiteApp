import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import categories from "../data/categories.json";
import FlatCard from '../components/FlatCard';
import { colors } from '../global/colors';


const CategoriesScreen = () => {

    const renderCategoryItem = ({item, index}) => {
        return (
            <FlatCard style={
                index%2==0?
                {...styles.categoryItemContainer, ...styles.row}
                :
                {...styles.categoryItemContainer,...styles.rowReverse}
            }>
                <Image 
                    source={{uri: item.image}}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.categoryTitle}>{item.title}</Text>
            </FlatCard>
        )
    }


    return (
        <View style={styles.categoriesContainer}>
            <FlatList
                data={categories}
                keyExtractor={item=> item.id}
                renderItem={renderCategoryItem}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoryItemContainer:{
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 50,
        marginVertical:10,
        padding: 20,
        
    },
    image:{
        width: 170,
        height: 180
    }, 
    categoryTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    row:{
        flexDirection: "row"
    },
    rowReverse:{
        flexDirection: "row-reverse"
    },
    categoriesContainer:{
        backgroundColor: colors.marronSuave
    }
})