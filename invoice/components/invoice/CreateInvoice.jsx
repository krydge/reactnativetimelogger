import { TextInput, Text, View, Pressable, StyleSheet } from "react-native";


export default function CreateInvoice() {
    return (
        <View>
            <Text>CreateInvoice</Text>
            <View className="invoiceForm">
                <TextInput placeholder="Enter Business Info"></TextInput>
                <TextInput placeholder="Enter Clients Name"></TextInput>
                <TextInput placeholder="Enter Hourly Rate"></TextInput>
                <TextInput placeholder="Enter Hours Worked"></TextInput>
                <TextInput placeholder="Enter Due Date"></TextInput>
                <TextInput placeholder="Enter Date"></TextInput>
                <TextInput placeholder="Enter Description"></TextInput>
            </View>
            <View className="buttons">
                <Pressable style={styles.saveButton}><Text>Save Invoice</Text></Pressable>
                <Pressable style={styles.saveButton}><Text>Save and Download Invoice</Text></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    saveButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
