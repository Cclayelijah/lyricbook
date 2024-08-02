import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, Platform, Pressable } from 'react-native'
import Colors from '@/constants/Colors'
import banner1 from '@/assets/images/party_display.png'
import banner2 from '@/assets/images/intuitive_tech.png'
import banner3 from '@/assets/images/vocab_mastery.png'
import green_arrow from '@/assets/images/green_arrow.png'
import blue_arrow from '@/assets/images/blue_arrow.png'
import orange_arrow from '@/assets/images/orange_arrow.png'
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { defaultStyles } from '@/constants/Styles'


const bannerImage1 = Image.resolveAssetSource(banner1).uri;
const bannerImage2 = Image.resolveAssetSource(banner2).uri;
const bannerImage3 = Image.resolveAssetSource(banner3).uri;
const greenArrowImage = Image.resolveAssetSource(green_arrow).uri;
const blueArrowImage = Image.resolveAssetSource(blue_arrow).uri;
const orangeArrowImage = Image.resolveAssetSource(orange_arrow).uri;

const pageData = [
  {
    'headline': '1. Learn Chinese',
    'paragraph': 'Learning Chinese may be hard, but it doesn’t have to be boring. Study the lyrics of your favorite song so you can sing it next time you go to karaoke with your friends! If we are missing a song, please contact us to request it. ',
    'image': bannerImage1,
    'arrow': greenArrowImage,
    'color': Colors.green
  },
  {
    'headline': '2. Intuitive Tech',
    'paragraph': 'When you don’t know a word, simply click on it to see the translation! If it is a word you want to commit to memory, add it to your vocabulary list. As you study, your mastery levels will go up. Once it reaches 100% you may not ever forget that word again.',
    'image': bannerImage2,
    'arrow': blueArrowImage,
    'color': Colors.blue
  },
  {
    'headline': '3. Vocab Mastery',
    'paragraph': 'We implemented an algorithm that helps you review vocabulary just before you forget it. Using our SRS method you can dedicate vocabulary to your long-term memory systematically.',
    'image': bannerImage3,
    'arrow': orangeArrowImage,
    'color': Colors.orange
  }
]

const Page = () => {

  const [navIndex, setNavIndex] = useState(0)

    const clickBack = () => {
      if (navIndex > 0) {
        setNavIndex(index => {
          return index - 1
        })
      }
    }

    const clickForward = () => {
      if (navIndex < 2) {
        setNavIndex(index => {
          return index + 1;
        })
      }
      else {
        // navigate to songs page
        router.replace("(tabs)/songs")
      }
  }

    return (
      <View style={{
          ...defaultStyles.container,
          paddingTop: 30,
          paddingBottom: 30
        }}>
          <>
            <Image source={{uri: pageData[navIndex]['image']}} style={styles.display} />
            <View style={styles.container}>
                <View style={styles.dotBox}>
                  <View style={{...styles.dotLong, backgroundColor: pageData[navIndex]['color']}} />
                  <View style={styles.dotSmall} />
                  <View style={styles.dotSmall} />
                </View>
                <Text style={styles.headline}>{pageData[navIndex]['headline']}</Text>
                <Text style={styles.text}>{pageData[navIndex]['paragraph']}</Text>
            </View>
            <View style={styles.navigation}>
              <View style={styles.navLeft}>
                {navIndex === 0 && <View style={{...styles.navSelected, borderColor: Colors.green}}></View>}
                <View style={styles.navGrey}></View>
                {navIndex === 1 && <View style={{...styles.navSelected, borderColor: Colors.blue}}></View>}
                <View style={styles.navGrey}></View>
                {navIndex === 2 && <View style={{...styles.navSelected, borderColor: Colors.orange}}></View>}
              </View>
              <TouchableOpacity style={styles.navRight} onPress={clickForward}>
                <Text style={styles.next}>{navIndex == 2 ? 'Get Started' : 'Next'}</Text>
                <Image source={{uri: pageData[navIndex]['arrow']}} style={styles.arrow} />
              </TouchableOpacity>
            </View>
          </>
          <Pressable style={styles.clickLeft} onPress={clickBack}></Pressable>
          <Pressable style={styles.clickRight} onPress={clickForward}></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
  clickLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '30%'
  },
  clickRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '70%'
  },
  display: {
    width: '100%',
    height: 375,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginBottom: 10,
    marginTop: 30
  },
  container: {
    padding: 40,
    width: '100%',
    flex: 1,
  },
  headline: {
    fontSize: 32,
    fontWeight: 'black',
    marginBottom: 20,
  },
  dotBox: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20
  },
  dotLong: {
    width: 40,
    height: 5,
    borderRadius: 10,
  },
  dotSmall: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginLeft: 5
  },
  text: {
    // marginTop: 20
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: .3,
    color: '#555'
  },
  navigation: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 40,
    paddingTop: 20,
    paddingBottom: 10,
  },
  navLeft: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  navGrey: {
    width: 8,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 8
  },
  navSelected: {
    width: 8,
    height: 8,
    borderWidth: 2,
    borderRadius: 8
  },
  navRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  next: {
    fontSize: 18
  },
  arrow: {
    width: 24,
    height: 24
  }
})

export default Page;