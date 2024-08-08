import Colors from '@/constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { Link, router, Stack } from 'expo-router'
import { Image, Pressable, TouchableOpacity } from 'react-native'
import vocab_remove from '@/assets/images/vocab_remove.png'
import vocab_add from '@/assets/images/vocab_add.png'
import back_arrow from '@/assets/images/back_arrow.png'

const vocabRemoveImage = Image.resolveAssetSource(vocab_remove).uri;
const vocabAddImage = Image.resolveAssetSource(vocab_add).uri;
const backArrowImage = Image.resolveAssetSource(back_arrow).uri;

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
      <Stack.Screen 
        name="[id]"
        options={{ 
          headerTitle: 'Card',
          headerLargeTitle: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
          headerRight: () => (
            <TouchableOpacity onPress={() => {
              router.setParams({ saved: 'y' });
            }}>
              {/* todo add / remove image toggle */}
              <Image source={{uri: vocabRemoveImage}} style={{width: 32, height: 32}} />
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