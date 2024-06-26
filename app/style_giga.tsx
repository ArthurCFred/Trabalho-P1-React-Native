import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  Image1: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 1,
    marginBottom: 1,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#000',
    fontWeight: 'bold',
    marginTop: -10,
    marginBottom: 20,
  },
  loginButton: {
    width: '88%',
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
    borderColor: '#A9A9A9',
    borderWidth: 1,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#A9A9A9',
  },
  firstAccess: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  separator: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  smallGridItem: {
    width: '30%',
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
  },
  menuItemText: {
    marginTop: 5,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});
export default styles;
