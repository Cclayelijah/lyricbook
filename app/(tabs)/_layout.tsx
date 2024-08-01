import Colors from '@/constants/Colors'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.white
        },
        headerShadowVisible: false,
      }}>
        <Tabs.Screen 
          name="songs" 
          options={{
            title: 'Songs',
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <Entypo name="beamed-note" size={size} color={color} />
            ),
          }} 
        />
        <Tabs.Screen 
          name="vocab" 
          options={{
            title: 'Vocab',
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <AntDesign name="dashboard" size={size} color={color} />
            ),
          }} 
        />
        {/* <Tabs.Screen 
          name="settings" 
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
          }} 
        /> */}
      </Tabs>
    </GestureHandlerRootView>
  )
}

export default Layout