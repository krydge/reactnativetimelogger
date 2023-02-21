import { Button, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { TimeLog } from '../../Models/TimeLog';

function ClientInfo(params) {
    const [client, setClient] = useState(params.client)
    const [time, setTime] = useState(false)
    console.log(client)
    const trackTime =(e)=>{
        setTime(true)
        let timer= new TimeLog()
        let c = client;
        c.timeLogs.push(timer)
        setClient(c)
    }
    const endTime=(e)=>{
        setTime(false);
        let c = client;
        c.timeLogs[c.timeLogs.length-1].stopTime()
        setClient(c)
    }
    return (
        <View>
            <Text>{client.clientName}</Text>
            <Text>Hourly Rate: {client.rate}</Text>
            {client.timeLogs.length > 0 && client.timeLogs.map((e) => <Text key={e.startTime}>{e.time }</Text>)}
            <Text>{client.billingTimeFrame}</Text>
            <Text>{client.totaltime}</Text>
            <Text>{client.signedContract}</Text>
            <Text>Contact Info</Text>
            <Text>Email: {client.contactInfo.email}</Text>
            <Text>Name: {client.contactInfo.name}</Text>
            <Text>Preferred Language: {client.contactInfo.language}</Text>
            <Text>Phone Number: {client.contactInfo.phone}</Text>
            {!time  &&
                <Button title="Track Working Time" onPress={trackTime}></Button>
            }
            {time &&
                <Button title="End Working Time" onPress={endTime}></Button>
            }
        </View>
    )
}

export default ClientInfo;