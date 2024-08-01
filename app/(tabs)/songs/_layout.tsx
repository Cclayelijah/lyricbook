import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ 
          headerTitle: 'Songs',
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
          headerSearchBarOptions: {
            placeholder: 'Search',
            hintTextColor: '#000',
            textColor: '#000'
          },
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons name="bookshelf" color={Colors.primary} size={42} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  )
}

export default Layout