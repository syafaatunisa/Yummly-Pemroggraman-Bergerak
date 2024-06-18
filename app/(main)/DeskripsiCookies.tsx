import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function DeskripsiCookies() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cookies</Text>
        <Image 
          source={require('../../assets/Cake/Cookies.jpg')} 
          style={styles.image}
        />
        <View style={styles.recipe}>
          <Text style={styles.subTitle}>Bahan:</Text>
          <Text style={styles.text}>
            - 250 ml air{'\n'}
            - 100 gram mentega{'\n'}
            - 2 sdm gula pasir{'\n'}
            - 1/2 sdt garam{'\n'}
            - 150 gram tepung terigu{'\n'}
            - 2 butir telur{'\n'}
            - Minyak goreng{'\n'}
            - Gula halus dan kayu manis (untuk taburan){'\n'}
          </Text>
          <Text style={styles.subTitle}>Cara Membuat:</Text>
          <Text style={styles.text}>
            1. Didihkan air, mentega, gula pasir, dan garam dalam panci.{'\n'}
            2. Masukkan tepung terigu, aduk cepat hingga adonan tidak lengket pada panci.{'\n'}
            3. Angkat dari api, biarkan dingin sedikit, lalu masukkan telur satu per satu sambil diaduk hingga rata.{'\n'}
            4. Panaskan minyak goreng.{'\n'}
            5. Masukkan adonan ke dalam kantong semprot dengan ujung berbentuk bintang.{'\n'}
            6. Semprotkan adonan langsung ke dalam minyak panas, goreng hingga keemasan.{'\n'}
            7. Angkat, tiriskan, dan taburi dengan gula halus dan kayu manis.{'\n'}

          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  recipe: {
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    padding: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
