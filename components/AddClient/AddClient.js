import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

function AddClient(params) {

    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={params.setClientName}
                name="clientName"
                value={params.clientName || ""}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactName}
                name="contactName"
                value={params.contactName || ""}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactPhone}
                name="contactPhone"
                value={params.contactPhone || ""}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactEmail}
                name="contactEmail"
                value={params.contactEmail || ""}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactLanguage}
                name="contactLanguage"
                value={params.contactLanguage || ""}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setEndTime}
                name="endTime"
                value={params.endTime || ""}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setBillPeriod}
                name="billPeriod"
                value={params.billPeriod || ""}
            />
            <Button onPress={()=>params.addClient()} title="Add Client Info"></Button>
        </ScrollView>
    )
}

export default AddClient;

const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:'90%',
    },
  });