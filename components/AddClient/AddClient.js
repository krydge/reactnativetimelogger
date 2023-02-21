import { Button, StyleSheet, Text, View, TextInput, ScrollView, Label, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

function AddClient(params) {

    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={params.setClientName}
                name="clientName"
                value={params.clientName || ""}
                placeholder={"Business / Client Name"}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactName}
                name="contactName"
                value={params.contactName || ""}
                placeholder={"Contacts Name"}
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactPhone}
                name="contactPhone"
                value={params.contactPhone || ""}
                placeholder="Contacts Phone Number"
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactEmail}
                name="contactEmail"
                value={params.contactEmail || ""}
                placeholder="Contacts Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setContactLanguage}
                name="contactLanguage"
                value={params.contactLanguage || ""}
                placeholder="Preferred Language"
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setEndTime}
                name="endTime"
                value={params.endTime || ""}
                placeholder="Desired Completion Date"
            />
            <TextInput
                style={styles.input}
                onChangeText={params.setBillPeriod}
                name="billPeriod"
                value={params.billPeriod || ""}
                placeholder="Billing Period"
            />
            <Pressable onPress={()=>params.addClient()} style={styles.submit}><Text>Add Client Info</Text></Pressable>
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
    submit:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#fff666'
    }
  });