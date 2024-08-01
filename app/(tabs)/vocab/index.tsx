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

  const removeSong = (vocab) => {
    // todo
  }
  const vocabulary: any = [
    {
      'id': 1,
      'chinese': '未来',
      'pinyin': 'wei lai'
    },
    {
      'id': 2,
      'chinese': '情歌',
      'pinyin': 'qing ge'
    },
    {
      'id': 3,
      'chinese': '在',
      'pinyin': 'zai'
    },
    {
      'id': 4,
      'chinese': '身邊',
      'pinyin': 'shen bian'
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
            data={vocabulary} 
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
                        {item.chinese}
                      </Text>

                      <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Feather
                          name='book'
                          size={16}
                          color={Colors.darkGray}
                        />
                        <Text style={{ color: Colors.darkGray, flex: 1 }}>
                          {item.pinyin}
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