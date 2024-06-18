import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Recipe } from "./Recipe";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([
    {
      title: "Croissant",
      image: require("../../assets/Cake/croissant.jpg"),
      screen: "DeskripsiCroissant",
    },
    {
      title: "Butter Cake",
      image: require("../../assets/Cake/Butter_cake.jpg"),
      screen: "DeskripsiButterCake",
    },
    {
      title: "Churros",
      image: require("../../assets/Cake/churros.jpg"),
      screen: "DeskripsiChurros",
    },
    {
      title: "Donut",
      image: require("../../assets/Cake/donat.jpg"),
      screen: "DeskripsiDonat",
    },
    {
      title: "Pancake",
      image: require("../../assets/Cake/pancakes.jpg"),
      screen: "DeskripsiPancake",
    },
    {
      title: "Cookies",
      image: require("../../assets/Cake/Cookies.jpg"),
      screen: "DeskripsiCookies",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [noData, setNoData] = useState(false);

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setNoData(filtered.length === 0);
  };

  const saveRecipe = async (recipe: Recipe) => {
    console.log(recipe);
    const recipes = await AsyncStorage.getItem("recipes");
    if (recipes === null) {
      await AsyncStorage.setItem("recipes", `[${JSON.stringify(recipe)}]`);
    } else {
      const decodedRecipe = JSON.parse(recipes) as Recipe[];
      console.log(decodedRecipe);
      if (!decodedRecipe.find((value) => value.title === recipe.title)) {
        decodedRecipe.push(recipe);
        await AsyncStorage.setItem("recipes", JSON.stringify(decodedRecipe));
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.alignMainContainer}
      >
        <Text style={styles.header}>Hallo, Syafa</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Yummly</Text>
          <Text style={styles.welcomeText}>
            Selamat datang, Yummly merupakan sebuah platform daring yang
            menghadirkan resep cake untuk para pengguna.
          </Text>
        </View>
        {/* <TouchableOpacity
          style={styles.saveRecipeContainer}
          onPress={() => router.navigate("SimpanResep")}
        >
          <Text style={styles.saveRecipeText}>Lihat resep yang disimpan</Text>
        </TouchableOpacity> */}
        <View style={styles.saveRecipeContainer}>
        <TouchableOpacity style={styles.addButton}  onPress={() => router.navigate("SimpanResep")}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.saveRecipeText}>Simpan Resep Cakes</Text>
      </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.filterButton} onPress={handleSearch}>
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        {noData ? (
          <Text style={styles.noDataText}>data tidak ada</Text>
        ) : (
          <View style={styles.recipeContainer}>
            {filteredRecipes.map((recipe, index) => (
              <View key={index} style={styles.recipeItem}>
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => router.navigate(recipe.screen)}
                >
                  <Image source={recipe.image} style={styles.recipeImage} />
                  <Text style={styles.recipeText}>{recipe.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => saveRecipe(recipe)}>
                  <Text style={{ color: "dodgerblue" }}>Simpan</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

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
