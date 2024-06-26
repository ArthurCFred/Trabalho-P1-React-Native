import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style_itau';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Icon name="user-circle" size={30} color="#000" />
          <Text style={styles.userText}>Olá, Fred</Text>
        </View>
        <Text style={styles.accountText}>Agência ••00 Conta ••00-0</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={[styles.gridItem, styles.largeItem]}>
          <Icon name="lock" size={30} color="#000" style={styles.icon} />
          <Text style={styles.gridText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Icon name="exchange" size={22} color="#000" style={styles.icon} />
          <Text style={styles.gridText}>Pix e Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Icon name="barcode" size={22} color="#000" style={styles.icon} />
          <Text style={styles.gridText}>Pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Icon name="list" size={22} color="#000" style={styles.icon} />
          <Text style={styles.gridText}>Extrato</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Icon name="credit-card" size={22} color="#000" style={styles.icon} />
          <Text style={styles.gridText}>Cartões</Text>
        </TouchableOpacity>

        <View style={styles.smallItemsContainer}>
          <TouchableOpacity style={[styles.gridItem, styles.smallItem]}>
            <Icon name="th" size={16} color="#000" style={styles.icon} />
            <Text style={styles.gridText}>Área Pix</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, styles.smallItem]}>
            <Icon name="key" size={16} color="#000" style={styles.icon} />
            <Text style={styles.gridText}>IToken</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, styles.smallItem]}>
            <Icon name="question-circle" size={16} color="#000" style={styles.icon} />
            <Text style={styles.gridText}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
