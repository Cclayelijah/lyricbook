import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff'
  },
  block: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 14,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  separator: {
    // height: StyleSheet.hairlineWidth,
    height: 2,
    backgroundColor: Colors.gray,
  },
});