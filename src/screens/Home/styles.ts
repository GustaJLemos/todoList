import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray700,

    paddingTop: 82,

    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 56,

    backgroundColor: COLORS.gray500,
    color: COLORS.gray300,

    padding: 8,
    fontSize: 16,

    borderRadius: 8,
    borderWidth: 0.8,
  },
  inputAndButton: {
    flexDirection: 'row',

    zIndex: 10,

    paddingHorizontal: 24,
    marginTop: 42
  },
  button: {
    width: 56,
    height: 56,
    marginLeft: 8,

    backgroundColor: COLORS.blue,

    alignItems: 'center',
    justifyContent: 'center',
    
    borderRadius: 8
  },
  listContainer: {
    flex: 1,
    width: '100%',

    marginTop: -30,
    backgroundColor: COLORS.gray500
  },
  listFilterContainer: {
    width: '100%',
    height: 56,

    marginTop: 64,
    paddingHorizontal: 24,
    
    alignItems: 'center', 
    justifyContent: 'space-between',

    flexDirection: 'row'
  },
  separator: {
    width: '100%',
    height: 2,

    alignSelf: 'center',

    backgroundColor: COLORS.gray400
  },
  listEmptyImage: {
    alignSelf: 'center',

    marginTop: 54,
    marginBottom: 24,
  },
  listEmptyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',

    color: COLORS.gray300
  }
});