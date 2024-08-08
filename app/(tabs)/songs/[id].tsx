import Colors from '@/constants/Colors';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { defaultStyles } from '@/constants/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { song, lines, words } from '@/constants/songData'
import { Popover } from 'react-native-popper';

const Page = () => {
  const [selectedLine, setSelectedLine] = useState<null | number>(null)
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
  
  const { id } = useLocalSearchParams();
  
  // useEffect(() => {
  //   navigation.setParams({ saved: 'yes' })
  // }, [navigation]);

  const select = (lineId:any, index:any) => {
    console.log(`selected - ${lineId}:${index}`)
    if (lineId && index) {
      setSelectedLine(lineId)
      setSelectedIndex(index)
    } else {
      setSelectedLine(null)
      setSelectedIndex(null)
    }
  }

  return (
    <View style={{
        ...defaultStyles.container,
        paddingTop: 20
      }}>
      <ScrollView style={styles.screen} scrollEnabled={true}>
        <Text style={{...styles.text, fontWeight: 800}}>{song.title}</Text>
        <Text style={{...styles.text}}>
          <Feather
            name='user'
            size={27}
            color={Colors.darkGray}
          /> {song.artist}
        </Text>
        <Text style={{...styles.text}}>-----</Text>
          {lines && lines.map && lines.map(({id, elements}) => (
            <Text style={styles.text} key={id}>
            {elements && elements.map && elements.map((e:any, wordIndex) => {
              if (typeof e === 'string') {
                return (e)
              } else {
                const { hanzi, definitions } = words[elements[wordIndex]]
                return (
                  <Popover
                    key={wordIndex}
                    isOpen={id === selectedLine && wordIndex === selectedIndex}
                    onOpenChange={(open) => {
                      if (!open) {
                        select(null, null)
                      } else {
                        select(id, wordIndex)
                      }
                    }}
                    onRequestClose={() => select(null, null)}
                    shouldCloseOnOutsideClick={true}
                    offset={4}
                    animated={true}
                    mode={'multiple'}
                    shouldFlip={true}
                    trigger={
                      <Pressable>
                        <View style={id === selectedLine && wordIndex === selectedIndex && styles.selected}>
                          <Text style={styles.text}>{hanzi}</Text>
                        </View>
                      </Pressable>
                    }
                  >
                    {/* may want to remove backdrop to click on next word directly */}
                    <Popover.Backdrop />
                    <Popover.Content>
                      {id === selectedLine && wordIndex === selectedIndex && 
                        <Popover.Arrow color='#fff' style={styles.popArrow} />
                      }
                      <View>
                        {id === selectedLine && wordIndex === selectedIndex && 
                        <View style={styles.popper}>
                          {definitions && definitions.map && definitions.map((d:any, index:number) => {
                          const {pinyin, description} = d
                          return (
                          <View key={index}>
                            <Text>
                              {pinyin && pinyin.map && pinyin.map((char:any, pinyinIndex:number) => {
                                const {tone, text} = char
                                const toneStyle = styles[`tone${tone}`]
                                return (
                                  <Text key={pinyinIndex} style={{...toneStyle, ...styles.pinyin}}>{text}</Text>
                                )
                              })}
                            </Text>
                            <Text>{description}</Text>
                          </View>
                          )})}
                        </View>
                        }
                      </View>
                    </Popover.Content>
                  </Popover>
                )
              }
            })}
          </Text>
          ))
            
          }
      </ScrollView>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 12,
  },
  text: {
    fontSize: 27,
    lineHeight: 36
  },
  selected: {
    backgroundColor: Colors.blue,
    borderRadius: 4,
  },
  popArrow: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  popper: {
    flex: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    borderTopWidth: 0,
    padding: 8,
    margin: 4,
    marginTop: 0
  },
  pinyin: {
    fontSize: 16,
    fontWeight: 600,
  },
  tone1: {
    color: Colors.tone1
  },
  tone2: {
    color: Colors.tone2
  },
  tone3: {
    color: Colors.tone3
  },
  tone4: {
    color: Colors.tone4
  },
  tone5: {
    color: Colors.tone5
  },
})