import {Text,View,Pressable} from "react-native"
import { useState } from "react";

const SettingsComponents = {Setting:"Setting"}
export default function SettingView(params) {
const [settingsComponent, setSettingsComponent] = useState(SettingsComponents.Setting);
    return (
        <View>
            <Text>SettingView</Text>
        </View>
    );
    
}