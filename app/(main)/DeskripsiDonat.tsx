import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function DeskripsiDonat() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Donat</Text>
        <Image 
          source={require('../../assets/Cake/donat.jpg')} 
          style={styles.image}
        />
        <View style={styles.recipe}>
          <Text style={styles.subTitle}>Bahan:</Text>
          <Text style={styles.text}>
            - 500 gram tepung terigu{'\n'}
            - 50 gram gula pasir{'\n'}
            - 10 gram ragi instan{'\n'}
            - 200 ml susu hangat{'\n'}
            - 2 butir telur{'\n'}
            - 100 gram mentega{'\n'}
            - 1/2 sdt garam{'\n'}
            - Minyak goreng{'\n'}

          </Text>
          <Text style={styles.subTitle}>Cara Membuat:</Text>
          <Text style={styles.text}>
            1. Campur tepung, gula, dan ragi dalam mangkuk besar.{'\n'}
            2. Tambahkan susu, telur, dan mentega, uleni hingga kalis.{'\n'}
            3. Tambahkan garam, uleni lagi hingga elastis.{'\n'}
            4. Tutup adonan dan biarkan mengembang selama 1 jam.{'\n'}
            5. Kempiskan adonan, bentuk menjadi donat, biarkan mengembang lagi selama 30 menit.{'\n'}
            6. Panaskan minyak goreng, goreng donat hingga keemasan.{'\n'}
            7. Angkat dan tiriskan, hias dengan gula halus atau glasur sesuai selera.{'\n'}
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
