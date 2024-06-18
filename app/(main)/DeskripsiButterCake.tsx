import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function DeskripsiButterCake() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Butter Cake</Text>
        <Image 
          source={require('../../assets/Cake/Butter_cake.jpg')} 
          style={styles.image}
        />
        <View style={styles.recipe}>
          <Text style={styles.subTitle}>Bahan:</Text>
          <Text style={styles.text}>
          - 250 gram mentega {'\n'}
          - 200 gram gula pasir{'\n'}
          - 4 butir telur{'\n'}
          - 300 gram tepung terigu{'\n'}
          - 1 sdt baking powder{'\n'}
          - 1 sdt vanili{'\n'}
          - 125 ml susu cair {'\n'}
          </Text>
          <Text style={styles.subTitle}>Cara Membuat:</Text>
          <Text style={styles.text}>
            1. Panaskan oven pada suhu 180°C, siapkan loyang yang diolesi mentega dan ditaburi tepung.{'\n'}
            2. Kocok mentega dan gula hingga lembut dan mengembang.{'\n'}
            3. Masukkan telur satu per satu sambil terus dikocok.{'\n'}
            4. Tambahkan vanili, lalu masukkan tepung dan baking powder secara bertahap, selingi dengan susu.{'\n'}
            5. Tuang adonan ke dalam loyang, ratakan.{'\n'}
            6. Panggang selama 40-50 menit atau hingga matang (tes dengan tusuk gigi).{'\n'}
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
