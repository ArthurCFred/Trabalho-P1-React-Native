import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Image1 from '../src/assets/images/GIGA.png';
import styles from './style_giga';

const App = () => {
  return (
    <LinearGradient
      colors={["#E0E0E0", "#6A88FF", "#008000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.header}>
          <Image source={Image1} style={styles.Image1} />
          <Text style={styles.subtitle}>Boas vindas</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF/CNPJ</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu CPF ou CNPJ"
          />
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Insira sua senha"
              secureTextEntry
            />
            <Icon name="eye" size={20} color="#000" style={styles.eyeIcon} />
          </View>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.firstAccess}>Primeiro acesso</Text>
        <View style={styles.separator}></View>
        <View style={styles.bottomMenu}>
          <TouchableOpacity style={styles.smallGridItem}>
            <Icon name="file-text-o" size={30} color="#000" />
            <Text style={styles.menuItemText}>2ª via do boleto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallGridItem}>
            <Icon name="shopping-bag" size={30} color="#000" />
            <Text style={styles.menuItemText}>Conhecer planos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallGridItem}>
            <Icon name="shopping-cart" size={30} color="#000" />
            <Text style={styles.menuItemText}>Confirmar compra</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
