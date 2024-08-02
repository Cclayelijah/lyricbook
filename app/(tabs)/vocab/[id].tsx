import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { defaultStyles } from '@/constants/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Page = () => {
  const { id } = useLocalSearchParams();

  // useEffect(() => {
  //   navigation.setParams({ saved: 'yes' })
  // }, [navigation]);

  return (
    <View style={{
        ...defaultStyles.container,
        padding: 20,
        paddingTop: 40
      }}>
      <View style={{flex: 1}}>
        <View style={styles.top}>
          <Text style={styles.title}>{id}</Text>
          <View style={styles.topRight}>
            <Text style={{fontSize: 14}}>Reviewed 13 times</Text>
            <Text style={{fontSize: 20, fontWeight: 800}}>xīyǐn</Text>
          </View>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="head-cog" size={46} color={Colors.blue} /> 
          <Text style={{fontSize: 18, color: '#777', fontWeight: 800}}>
            10% Mastery
          </Text>
        </View>
        <View style={defaultStyles.separator} />
        <Text style={styles.wordType}>Verb</Text>
        <Text style={styles.typeDefinition}>attract; draw; fascinate</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.ad}>
          <Text style={{fontSize: 20, fontWeight: 800}}>Chinese Lessons</Text>
          <Text>Ready to take your chinese to the next level?</Text>
            <View style={styles.adButton}>
              <Text style={{fontSize: 16, fontWeight: 600}}>Sign Me Up</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    flexDirection: 'row',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  topRight: {
    flex: 1,
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 56,
    fontWeight: 100
  },
  wordType: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20
  },
  typeDefinition: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: 200,
    color: '#555',
  },
  ad: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
  adButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.orange
  }
})