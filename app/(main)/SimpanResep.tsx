import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Recipe } from "./Recipe";

const SimpanResep = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("recipes").then((res) => {
      if (res !== null) {
        const decodedRecipes = JSON.parse(res);
        setRecipes(decodedRecipes);
      }
    });
  }, [recipes]);

  const hapusResep = async (recipe: Recipe) => {
    const recipesFromStorage = await AsyncStorage.getItem("recipes");
    console.log(recipesFromStorage);
    if (recipesFromStorage !== null) {
      let decodedRecipes = JSON.parse(recipesFromStorage) as Recipe[];
      decodedRecipes = decodedRecipes.filter(
        (item) => item.title !== recipe.title
      );
      await AsyncStorage.setItem("recipes", JSON.stringify(decodedRecipes));
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 24,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginBottom: 24,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Resep disimpan</Text>
      </View>
      {recipes.length === 0 ? (
        <Text style={styles.noDataText}>Tidak ada Resep yang disimpan!</Text>
      ) : (
        <View style={styles.recipeContainer}>
          {recipes.map((recipe, index) => (
            <View key={index} style={styles.recipeItem}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => router.navigate(recipe.screen)}
              >
                <Image source={recipe.image} style={styles.recipeImage} />
                <Text style={styles.recipeText}>{recipe.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => hapusResep(recipe)}>
                <Text style={{ color: "red" }}>Hapus</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    color: "dodgerblue",
  },
  mainContainer: {
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  alignMainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  welcomeContainer: {
    backgroundColor: "#C8C7FF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF99CC",
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 14,
    color: "#000",
  },
  saveRecipeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#C8C7FF",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  addButtonText: {
    fontSize: 24,
    color: "#FFF",
  },
  saveRecipeText: {
    fontSize: 16,
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderColor: "#C8C7FF",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  filterButton: {
    backgroundColor: "#C8C7FF",
    borderRadius: 8,
    padding: 8,
  },
  filterButtonText: {
    color: "#FFF",
  },
  noDataText: {
    fontSize: 18,
    color: "#FF0000",
    marginTop: 16,
    textAlign: "center",
  },
  recipeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  recipeItem: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
  },
  recipeImage: {
    width: 160,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeText: {
    fontSize: 14,
    color: "#000",
  },
});

export default SimpanResep;
