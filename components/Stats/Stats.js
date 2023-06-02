import { Button, StyleSheet, Text, View, TextInput, ScrollView, Label, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

function Stats(params) {
    const [clients, setClients] = useState(params.clients)
    // console.log(clients)
    return (<ScrollView>
        <Text>Number of Clients:{clients.length}</Text>
    </ScrollView>)
}

export default Stats;