import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Client } from './Models/Client'
import { useEffect, useState } from 'react';
import Menu from './components/menu/Menu';
import ViewClients from './components/ViewClients/ViewClients';
import AddClient from './components/AddClient/AddClient';
import ClientInfo from './components/ClientInfo/ClientInfo';
const testClient = new Client("RydgeSoftware", "kaydon stubbs", "4352622247", "test@gmail.com", "English", Date.now(), "Febuary,20,2024", "BiWeekly")
export default function App() {
  const [clients, setClients] = useState([testClient])
  const [addClient, setAddClient] = useState(false)
  const [viewClients, setViewClients] = useState(false)
  const [client, setClient]= useState(false)
  const [clientName, setClientName] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactLanguage, setContactLanguage] = useState("")
  const [endTime, setEndTime] = useState("")
  const [billPeriod, setBillPeriod] = useState("")
  const [view, setView] = useState("stats")


  const handleAdd = (e) => {
    let client = new Client(clientName, contactName, contactPhone, contactEmail, contactLanguage, Date.now(), endTime, billPeriod)
    if (client.clientName != "") {
      alert(client.clientName)
      let c = clients;
      c.push(client);
      setClients(c);
      clearNewContactInfo()
      setAddClient(false)
    }
    else {
      alert("Client info missing. Client will not be added")
      setAddClient(false)
    }

  }
  const handlAddClient = (e) => {
    setAddClient(true)
    setViewClients(false)
  }
  const handlViewClient = (e) => {
    setAddClient(false)
    setViewClients(true)
  }
  const handleViewClientInfo = (e)=>{
    setClient(e)
    setAddClient(false)
    setViewClients(false)
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
      <Menu setView={setView}></Menu>
      {view == "Clients" &&
        <ViewClients clients={clients} setClient={handleViewClientInfo}></ViewClients>
      }{view ==="AddClient" && 
        <AddClient addClient={handleAdd}  setBillPeriod={setBillPeriod} billPeriod={billPeriod} setEndTime={setEndTime} endTime={endTime} setContactLanguage={setContactLanguage} contactLanguage={contactLanguage} setContactEmail={setContactEmail} contactEmail={contactEmail} clientName={clientName} setClientName={setClientName} contactName={contactName} setContactName={setContactName} contactPhone={contactPhone} setContactPhone={setContactPhone} />
      }
      {view ==="Stats" && 
        <AddClient addClient={handleAdd}  setBillPeriod={setBillPeriod} billPeriod={billPeriod} setEndTime={setEndTime} endTime={endTime} setContactLanguage={setContactLanguage} contactLanguage={contactLanguage} setContactEmail={setContactEmail} contactEmail={contactEmail} clientName={clientName} setClientName={setClientName} contactName={contactName} setContactName={setContactName} contactPhone={contactPhone} setContactPhone={setContactPhone} />
      }
      {client!=""&&
        <ClientInfo client={client}></ClientInfo>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
