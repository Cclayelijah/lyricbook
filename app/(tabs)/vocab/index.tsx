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

  const removeSong = (vocab: string) => {
    //console.log(vocab)
    // todo
  }

  
  const vocabulary: any = [
    {
      'id': '吸引',
      'pinyin': 'Xīyǐn',
      'wordType': 'VERB',
      'definition': 'attract; draw; fascinate'
    },
    {
      'id': '擅长',
      'pinyin': 'Shàncháng',
      'wordType': 'VERB',
      'definition': 'be good at; be expert in; be skilled in'
    },
    {
      'id': '撒谎',
      'pinyin': 'Sāhuǎng',
      'wordType': 'VERB COLLOQUIAL',
      'definition': 'tell a lie; lie'
    },
    {
      'id': '打扫',
      'pinyin': 'Dǎsǎo',
      'wordType': 'VERB',
      'definition': 'clean; sweep'
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
                      <View style={{flexDirection: 'row', gap: 4 }}>
                        <Text style={{ fontSize: 22, color: Colors.blue, fontWeight: 800 }}>
                          {item.id}
                        </Text>
                        <Text style={{ color: '#17191C', fontSize: 14, fontWeight: 800, alignSelf: 'flex-end', maxWidth: 325}}>
                          {item.pinyin}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: '#17191C', fontSize: 14, fontWeight: 700}}>
                          {item.wordType}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: Colors.darkGray}}>
                          {item.definition}
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