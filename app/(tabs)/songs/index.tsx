import Colors from '@/constants/Colors'
import { Feather, Ionicons } from '@expo/vector-icons'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import Animated, { CurvedTransition, FadeInUp, FadeOutUp } from 'react-native-reanimated'
import SwipeableRow from '@/app/components/SwipeableRow'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { defaultStyles } from '@/constants/Styles'
import next_arrow from '@/assets/images/next_arrow.png'

const transition = CurvedTransition.delay(50)
const nextArrowImage = Image.resolveAssetSource(next_arrow).uri;

const Page = () => {

  const removeSong = (item) => {
    // todo
  }
  const songs: any = [
    {
      'id': 1,
      'title': '未来式情歌',
      'artist': '蜡笔小心, 吕帅'
    },
    {
      'id': 2,
      'title': '在你的身邊',
      'artist': '盛哲'
    },
    {
      'id': 3,
      'title': '泡沫',
      'artist': 'G.E.M.鄧紫棋'
    },
  ]



  return (
    <View style={{flex:1, backgroundColor: Colors.white}}>
      <ScrollView 
        contentInsetAdjustmentBehavior='automatic'
        contentContainerStyle={{paddingBottom: 40}}>
        <Animated.View style={defaultStyles.block} layout={transition.delay(50)}>
          <Animated.FlatList 
            itemLayoutAnimation={transition}
            skipEnteringExitingAnimations
            data={songs} 
            scrollEnabled={false} 
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
            
            renderItem={({item}) => (
              <SwipeableRow onDelete={() => removeSong(item)}>
                <TouchableOpacity>
                  <Animated.View 
                    style={styles.row}
                    entering={FadeInUp.delay(100)}
                    exiting={FadeOutUp.delay(100)}
                  >
                    
                    <View style={{ flex: 1, gap: 2 }}>
                      <Text style={{ fontSize: 22, color: Colors.blue, fontWeight: 800 }}>
                        {item.title}
                      </Text>

                      <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Feather
                          name='user'
                          size={16}
                          color={Colors.darkGray}
                        />
                        <Text style={{ color: Colors.darkGray, flex: 1 }}>
                          {item.artist}
                        </Text>
                      </View>
                    </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{uri: nextArrowImage}}
                          style={{width: 30, height: 30}}
                        />
                      </View>
                  </Animated.View>
                </TouchableOpacity>
              </SwipeableRow>
            )} 
          />
        </Animated.View>
      </ScrollView>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop: 8, 
    paddingBottom: 8
  }
})