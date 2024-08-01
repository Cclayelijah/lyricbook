import Colors from '@/constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ 
          headerTitle: 'Vocab',
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
              <FontAwesome5 name="flag-checkered" color={Colors.primary} size={32} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  )
}

export default Layout