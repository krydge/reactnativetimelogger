import { StyleSheet, View } from 'react-native';
import { Client } from './Models/Client'
import { useEffect, useState, useReducer } from 'react';
import Menu from './components/menu/Menu';
import ViewClients from './components/ViewClients/ViewClients';
import AddClient from './components/AddClient/AddClient';
import Stats from './components/Stats/Stats'
import axios from "axios"


const baseUrl = "https://rydgesoftwaretimeloggingapi.onrender.com/clients"

async function getClients() {
  const response = await axios.get(baseUrl)
  let apiclients = parseClients(response.data)
  return apiclients
}

function parseClients(clients) {
  let clientList = []
  clients.map((c) => {
    clientList.push(new Client(c.companyname, c.contactname, c.phonenumber, c.email, c.preferredlanguage, c.startdate, c.enddate, c.preferredlanguage, c.billingtimeframe,c.id, c.rate, c.signedcontract))
  })
  return clientList
}
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}
export default function App() {
  const [ignored, forcedUpdate] = useReducer(x => x + 1, 0)
  const [clients, setClients] = useState([])
  const [addClient, setAddClient] = useState(false)
  const [viewClients, setViewClients] = useState(false)
  const [client, setClient] = useState(false)
  const [view, setView] = useState("Stats")

  useEffect(() => {
    async function fetchData() {
      setClients(await getClients())
    }
    fetchData()
  }, [forcedUpdate]);


  const handleViewClientInfo = (e) => {
    setClient(e)
    setAddClient(false)
    setViewClients(false)
  }
  console.log(clients)
  return (
    <View style={styles.container}>
      <Menu setView={setView} view={view}></Menu>
      {view == "Clients" &&
        <ViewClients clients={clients} setClient={handleViewClientInfo} client={client} clearClient={setClient}></ViewClients>
      }{view === "AddClient" &&
        <AddClient update={forcedUpdate} />
      }
      {view === "Stats" &&
        <Stats clients={clients}></Stats>
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

