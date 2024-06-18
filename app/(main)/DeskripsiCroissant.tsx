import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function DeskripsiScreen1() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Croissant</Text>
        <Image 
          source={require('../../assets/Cake/croissant.jpg')} 
          style={styles.image}
        />
        <View style={styles.recipe}>
          <Text style={styles.subTitle}>Bahan:</Text>
          <Text style={styles.text}>
            - 500 gram tepung terigu protein tinggi{'\n'}
            - 10 gram garam{'\n'}
            - 50 gram gula pasir{'\n'}
            - 20 gram ragi instan{'\n'}
            - 300 ml air dingin{'\n'}
            - 250 gram mentega dingin (untuk laminasi)
          </Text>
          <Text style={styles.subTitle}>Cara Membuat:</Text>
          <Text style={styles.text}>
            1. Campur tepung, garam, gula, dan ragi dalam mangkuk besar.{'\n'}
            2. Tambahkan air dingin sedikit demi sedikit sambil diaduk hingga adonan terbentuk.{'\n'}
            3. Uleni adonan selama 10 menit hingga elastis.{'\n'}
            4. Giling adonan menjadi persegi panjang, lipat mentega dingin di tengah, lalu lipat seperti amplop.{'\n'}
            5. Giling dan lipat adonan beberapa kali, istirahatkan di kulkas selama 30 menit setiap kali lipatan.{'\n'}
            6. Setelah 3-4 kali lipatan, giling adonan menjadi lembaran tipis dan potong menjadi segitiga.{'\n'}
            7. Gulung segitiga dari sisi lebar ke puncak membentuk croissant.{'\n'}
            8. Biarkan mengembang selama 1-2 jam.{'\n'}
            9. Panggang di oven yang telah dipanaskan pada suhu 200°C selama 15-20 menit hingga keemasan.
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
