import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',

    color: COLORS.blue
  },
  countContainer: {
    backgroundColor: COLORS.gray400,

    paddingHorizontal: 10,
    paddingVertical: 2,

    borderRadius: 30
  },
  count: {
    fontSize: 12,
    fontWeight: 'bold',

    color: COLORS.gray200
  }
});