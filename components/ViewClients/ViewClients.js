import { Button, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import ClientInfo from '../ClientInfo/ClientInfo'
function ViewClients(params) {

    return (
        <View >

            {
                params.clients.map((c) => <Pressable style = {styles.clientButton} key={c.clientName + c.contactEmail} onPress={()=>params.setClient(c)}><Text >{c.clientName}</Text></Pressable>)
            }
            {params.client&&
            <ClientInfo client={params.client} clearClient={params.clearClient}></ClientInfo>
}
        </View>
    )
}

export default ViewClients;

const styles = StyleSheet.create({

    clientButton: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#fff002",
    },
  });