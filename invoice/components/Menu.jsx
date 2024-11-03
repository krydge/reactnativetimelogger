import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
export default function Menu(params) {
    const [invoiceButtonStyle, setButtonStyle] = useState(styles.nonPressed);
    const [clientsButtonStyle, setClientsButtonStyle] = useState(styles.nonPressed);
    const [statisticsButtonStyle, setstatisticsButtonStyle] = useState(styles.nonPressed);
    const [settingsButtonStyle, setSettingsButtonStyle] = useState(styles.nonPressed);
    return (
        <View style={styles.menuContainer}>
            <Pressable style={invoiceButtonStyle}
                onPress={() => params.setView(params.Views.Invoice)}
                onPressIn={() => setButtonStyle(styles.pressed)}
                onPressOut={() => setButtonStyle(styles.nonPressed)}>
                <Text>Invoice</Text>
            </Pressable>
            <Pressable style={clientsButtonStyle}
                onPress={() => params.setView(params.Views.Clients)}
                onPressIn={() => setClientsButtonStyle(styles.pressed)}
                onPressOut={() => setClientsButtonStyle(styles.nonPressed)}>
                <Text>Clients</Text>
            </Pressable>
            <Pressable style={statisticsButtonStyle}
                onPress={() => params.setView(params.Views.Statistics)}
                onPressIn={() => setstatisticsButtonStyle(styles.pressed)}
                onPressOut={() => setstatisticsButtonStyle(styles.nonPressed)}>
                <Text>Stats</Text>
            </Pressable>
            <Pressable style={settingsButtonStyle}
                onPress={() => params.setView(params.Views.Settings)}
                onPressIn={() => setSettingsButtonStyle(styles.pressed)}
                onPressOut={() => setSettingsButtonStyle(styles.nonPressed)}>
                <Text>Settings</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        
    },
    nonPressed: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});