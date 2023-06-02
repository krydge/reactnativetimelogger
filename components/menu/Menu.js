import { Button, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

function Menu(params) {
    return (
        <View style={styles.menu}>
            <Pressable onPress={()=>params.setView("AddClient")} style={params.view==="AddClient"?styles.menuButton:styles.selectedMenuButton} ><Text>Add Client</Text></Pressable>
            <Pressable onPress={()=>params.setView("Clients")} style={params.view==="Clients"?styles.menuButton:styles.selectedMenuButton} ><Text>View Clients</Text></Pressable>
            <Pressable onPress={()=>params.setView("Stats")} style={params.view==="Stats"?styles.menuButton:styles.selectedMenuButton} ><Text>Stats</Text></Pressable>
        </View>

    )
}

export default Menu;

const styles = StyleSheet.create({
    menu: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 32,
        backgroundColor:'gray',

    },
    menuButton: {
        padding: 15,
        width: '33.3333333333%',
        backgroundColor: '#fff666',
        alignItems:'center',
    },
    selectedMenuButton: {
        padding: 15,
        width: '33.4%',
        backgroundColor: '#fff888',
        alignItems:'center',
    }
});
