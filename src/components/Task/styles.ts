import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    padding: 12,
    marginBottom: 12,

    borderRadius: 8,
    flexDirection: 'row',
    
    backgroundColor: COLORS.gray400,
    borderWidth: 0.4,
    borderColor: COLORS.gray300,
    
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  checkButton: {
    marginRight: 12
  },
  text: {
    flex: 1,

    fontSize: 14,
  },
  deleteButton: {
    marginLeft: 12
  }
});