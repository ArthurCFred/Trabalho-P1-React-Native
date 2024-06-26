import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountText: {
    marginTop: 5,
    marginLeft: 40,
    color: 'grey',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 120,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  largeItem: {
    width: '100%',
    height: 140,
  },
  smallItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallItem: {
    width: '30%',
    height: 100,
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
  gridText: {
    marginTop: 'auto',
    marginLeft: 10,
    fontSize: 16,
    textAlign: 'left',
  },
});

export default styles;
