import { Button, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

function Menu(params) {
    return (
        <View style={styles.menu}>
            <Pressable onPress={()=>params.setView("AddClient")} style={styles.menuButton} ><Text>Add Client</Text></Pressable>
            <Pressable onPress={()=>params.setView("Clients")} style={styles.menuButton} ><Text>View Clients</Text></Pressable>
            <Pressable onPress={()=>params.setView("Stats")} style={styles.menuButton} ><Text>Stats</Text></Pressable>
        </View>

    )
}

export default Menu;

const styles = StyleSheet.create({
    menu: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 0,
        backgroundColor:'gray',

    },
    menuButton: {
        padding: 15,
        width: '33.3333333333%',
        backgroundColor: '#fff666',
        alignItems:'center',
    }
});
