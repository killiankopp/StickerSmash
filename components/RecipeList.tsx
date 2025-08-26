import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '../types/Recipe';
import RecipeCard from './RecipeCard';

type Props = {
  recipes: Recipe[];
  onRecipePress?: (recipe: Recipe) => void;
};

export default function RecipeList({ recipes, onRecipePress }: Props) {
  const renderRecipe = ({ item }: { item: Recipe }) => (
    <RecipeCard 
      recipe={item} 
      onPress={() => onRecipePress?.(item)}
    />
  );

  if (recipes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Aucune recette disponible</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={recipes}
      renderItem={renderRecipe}
      keyExtractor={(item) => item.id}
      numColumns={2}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-around',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});