import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Client } from './Models/Client'
import { useEffect, useState } from 'react';
const testClient = new Client("RydgeSoftware", "kaydon stubbs", "4352622247", "test@gmail.com", "English", Date.now(), "Febuary,20,2024", "BiWeekly")
export default function App() {
  const [clients, setClients] = useState([testClient])
  const [addClient, setAddClient] = useState(false)
  const [clientName, setClientName] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactLanguage, setContactLanguage] = useState("")
  const [endTime, setEndTime] = useState("")
  const [billPeriod, setBillPeriod] = useState("")

  const handlAdd = (e) => {
    let client = new Client(clientName, contactName, contactPhone, contactEmail, contactLanguage, Date.now(), endTime, billPeriod)
    let c = clients;
    c.push(client);
    setClients(c);
    clearNewContactInfo()
    setAddClient(false)
  }
  const handlAddClient = (e) => {
    setAddClient(true)
  }
  function clearNewContactInfo() {
    setClientName("");
    setContactName("");
    setContactPhone("")
    setContactEmail("");
    setContactLanguage("")
    setEndTime("")
    setBillPeriod("")
  }
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {clients.length > 0 &&
        clients.map((c) => <Text key={c.clientName + c.contactEmail}>{c.clientName}</Text>)
      }{addClient && <>
        <TextInput
          style={styles.input}
          onChangeText={setClientName}
          name="clientName"
          value={clientName || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={setContactName}
          name="contactName"
          value={contactName || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={setContactPhone}
          name="contactPhone"
          value={contactPhone || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={setContactEmail}
          name="contactEmail"
          value={contactEmail || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={setContactLanguage}
          name="contactLanguage"
          value={contactLanguage || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEndTime}
          name="endTime"
          value={endTime || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={setBillPeriod}
          name="billPeriod"
          value={billPeriod || ""}
        />
        <Button onPress={handlAdd} title="Add Client"></Button>
      </>
      }
      {!addClient &&
        <Button onPress={handlAddClient} title="Add Client"></Button>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
