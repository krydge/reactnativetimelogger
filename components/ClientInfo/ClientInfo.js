import { Button, StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { TimeLog } from '../../Models/TimeLog';


function ClientInfo(params) {
    const [client, setClient] = useState(params.client)
    const [time, setTime] = useState(false)
    const trackTime = (e) => {
        setTime(true)
        let timer = new TimeLog()
        let c = client;
        c.timeLogs.push(timer)
        setClient(c)
    }
    const endTime = (e) => {
        setTime(false);
        let c = client;
        c.timeLogs[c.timeLogs.length - 1].stopTime()
        c.totaltime = getTotalTime(c.timeLogs)
        setClient(c)
    }
    function getTotalTime(timelogs) {
        let total = 0;
        timelogs.map((t) => {
            total = total + t.time;

        })
        return total;
    }

    const formatTime = (total) => {
        let hour = 0;
        hour = total / (60 * 60 * 60);
        return (<Text>Hour(s):{hour}</Text>)
    }
    return (
        <ScrollView style={styles.Details} >
            <Text>{client.clientName}</Text>
            <Text>Hourly Rate: {client.rate}</Text>
            {client.timeLogs.length > 0 && client.timeLogs.map((e) => <Text key={e.startTime}>Hour(s):{e.time / (60 * 60 * 60)}</Text>)}
            <Text>Billing Period: {client.billingTimeFrame}</Text>
            <Text>Total Time Worked: {formatTime(client.totaltime)}</Text>
            <Text>Contract signed: {client.signedContract}</Text>
            <Text>Contact Info</Text>
            <Text>Email: {client.contactInfo.email}</Text>
            <Text>Name: {client.contactInfo.name}</Text>
            <Text>Preferred Language: {client.contactInfo.language}</Text>
            <Text>Phone Number: {client.contactInfo.phone}</Text>
            <Text>Project Info: {client.project}</Text>
            {!time &&
                <View>
                    <Button title="Track Working Time" onPress={trackTime}></Button>
                    <Pressable onPress={() => params.clearClient()} style={styles.Button}><Text>Clear Client</Text></Pressable>
                </View>
            }
            {time &&
                <Button title="End Working Time" onPress={endTime}></Button>
            }
        </ScrollView>
    )
}

export default ClientInfo;


const styles = StyleSheet.create({
    menu: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 32,
        backgroundColor: 'gray',

    },
    Button: {
        padding: 15,
        backgroundColor: '#fff666',
        border: 'black 1px',
        alignItems: 'center',
    },
    Details: {
        padding: 15,
    }
});