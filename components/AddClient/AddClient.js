import {  StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native';
import {useState } from 'react';
import {Client}from '../../Models/Client'
import axios from "axios"

function AddClient(params) {

    const [clientName, setClientName] = useState("")
    const [contactName, setContactName] = useState("")
    const [contactPhone, setContactPhone] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactLanguage, setContactLanguage] = useState("")
    const [endTime, setEndTime] = useState("")
    const [billPeriod, setBillPeriod] = useState("")
    const [projectdescription, setprojectdescription] = useState("")

    function clearNewContactInfo() {
        setClientName("");
        setContactName("");
        setContactPhone("")
        setContactEmail("");
        setContactLanguage("")
        setEndTime("")
        setBillPeriod("")
        setprojectdescription("")
    }

    async function addClient() {
        let cdata={
            "companyname": clientName,
            "contactname": contactName,
            "phonenumber": contactPhone,
            "email": contactEmail,
            "preferredlanguage": contactLanguage,
            "startdate": String(Date.now()),
            "enddate": endTime,
            "rate": 100,
            "billingtimeframe": billPeriod,
            "signedcontract": false,
            "projectdescription": projectdescription
        }
        await axios.post("https://rydgesoftwaretimeloggingapi.onrender.com/client",{data:cdata})
      }

    const handleAdd = async (e) => {
      
        if (clientName != "") {
            console.log("handle add with a name")
            await addClient()
            clearNewContactInfo()
            params.update(true)
        }
        else {
            alert("Client info missing. Client will not be added")
            
        }

    }


    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setClientName}
                name="clientName"
                value={clientName || ""}
                placeholder={"Business / Client Name"}
            />
            <TextInput
                style={styles.input}
                onChangeText={setContactName}
                name="contactName"
                value={contactName || ""}
                placeholder={"Contacts Name"}
            />
            <TextInput
                style={styles.input}
                onChangeText={setContactPhone}
                name="contactPhone"
                value={contactPhone || ""}
                placeholder="Contacts Phone Number"
            />
            <TextInput
                style={styles.input}
                onChangeText={setContactEmail}
                name="contactEmail"
                value={contactEmail || ""}
                placeholder="Contacts Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={setContactLanguage}
                name="contactLanguage"
                value={contactLanguage || ""}
                placeholder="Preferred Language"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEndTime}
                name="endTime"
                value={endTime || ""}
                placeholder="Desired Completion Date"
            />
            <TextInput
                style={styles.input}
                onChangeText={setBillPeriod}
                name="billPeriod"
                value={billPeriod || ""}
                placeholder="Billing Period"
            />
            <TextInput
                style={styles.input}
                onChangeText={setprojectdescription}
                name="billPeriod"
                value={projectdescription || ""}
                placeholder="Project Description"
            />
            <Pressable onPress={handleAdd} style={styles.submit}><Text>Add Client Info</Text></Pressable>
        </ScrollView>
    )
}

export default AddClient;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '90%',
    },
    submit: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff666'
    }
});