import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
export default function InvoiceMenu(params) {
    const [createButton, setCreateButton] = useState(style.nonPressed);
    const [viewButton, setViewButton] = useState(style.nonPressed);
    return (
        <View style={style.invoiceMenuContainer}>
            <Pressable style={createButton}
                onPress={() => params.setInvoiceComponent(params.InvoiceComponents.CreateInvoice)}
                onPressIn={() => setCreateButton(style.pressed)}
                onPressOut={() => setCreateButton(style.nonPressed)}>
                <Text>Create Invoice</Text>
            </Pressable>
            <Pressable style={viewButton}
                onPress={() => params.setInvoiceComponent(params.InvoiceComponents.ViewInvoices)}
                onPressIn={() => setViewButton(style.pressed)}
                onPressOut={() => setViewButton(style.nonPressed)}>
                <Text>View Invoices</Text>
            </Pressable>
        </View>
    );
}
const style = StyleSheet.create({
    invoiceMenuContainer: {
        flexDirection: 'row',
        backgroundColor:'green',
        justifyContent: 'space-around',
        width:'100%',
        height: '15%',
    },
    nonPressed: {
        backgroundColor: 'green',

    },
    pressed: {
        backgroundColor: 'blue',

    },
})