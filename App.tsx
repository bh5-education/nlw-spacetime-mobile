import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';

export default function App() {
  const [] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
