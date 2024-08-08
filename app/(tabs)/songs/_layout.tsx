import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { Image, TouchableOpacity } from 'react-native'
import back_arrow from '@/assets/images/back_arrow.png'

const Layout = () => {
  const backArrowImage = Image.resolveAssetSource(back_arrow).uri;

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
      <Stack.Screen 
        name="[id]"
        options={{ 
          headerTitle: 'Study',
          headerLargeTitle: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
          headerRight: () => (
            <TouchableOpacity onPress={() => {
              router.setParams({ saved: 'y' });
            }}>
              {/* todo add / remove icon toggle (bookmark-music) */}
              <MaterialCommunityIcons name='bookmark-music-outline' size={42} />
            </TouchableOpacity>
          ),
          // headerBackTitleVisible: false,
          // headerBackImageSource: back_arrow,
          // headerBackTitleStyle: {fontSize: 40},
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              router.back()
            }}>
              <Image source={{uri: backArrowImage}} style={{width: 32, height: 32}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  )
}

export default Layout