import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Menu from './components/Menu';
import InvoiceView from './views/InvoiceView';
import SettingsView from './views/SettingView';
import StatisticsView from './views/StatisticsView'
import ClientsView from './views/ClientsView';


const Views = {
  Invoice: 'Invoice',
  Statistics: 'Statistics',
  Clients: 'Clients',
  Settings: " Settings"
};

export default function App() {
  const [view, setView] = useState(Views.Invoice);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Menu setView={setView} Views={Views}></Menu>
      {view === Views.Invoice && <InvoiceView />}
      {view === Views.Statistics && <StatisticsView />}
      {view === Views.Clients && <ClientsView />}
      {view === Views.Settings && <SettingsView />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
