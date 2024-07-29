import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'pizza', label: 'PIZZA', icon: require('./assets/icon-pizza.png') },
    { id: 'burger', label: 'BURGER', icon: require('./assets/icon-burger.png') },
    { id: 'drink', label: 'DRINK', icon: require('./assets/icon-drink.png') },
    { id: 'rice', label: 'RICE', icon: require('./assets/icon-rice.png') },
  ];

  const handleCategoryPress = (id) => {
    setSelectedCategory(prevCategory => prevCategory === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/ba69/0395/85d997e07552a382305f9a418fc44c08?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tie~A4i79t9BKTrVZrWQ6PCGvRQBaDBa516ZLiYDdGT6GSXvNpTvIiyO9TQJReDtqv5B1zZPhimzG1l1jG82ojthwiJjpAh60zK2QDA~Muurc1-fwwX5tVmwNECNOuuZtBHcN-b3Ed8w1xSWB-eYAaeHRFuDP5eD9gXKc43UVOeayMPeXKknAFr8KZ5Q7mbXm6~PqOgx9uFIIeVbK8g0i0gqQ1y~sr74I8i3rkeoihJ8jShM9eoHqVWg4gCyXHpGRq~iEHYkojbXWDqUn3~ImoKDNeKYpB2cLSPY6d0gl9UAFOkiaQPGtPSPteXbP0Z3kwRiNRuVkUOBFFVLEUaoDQ__' }} 
            style={styles.profileImage} 
          />
          <View style={styles.locationSection}>
            <Text style={styles.locationText}>Your Location</Text>
            <View style={styles.locationContainer}>
              <Image source={require('./assets/icon-location.png')} style={styles.locationIcon} />
              <Text style={styles.location}>Savar, Dhaka</Text>
            </View>
          </View>
          <Image 
            source={require('./assets/icon-bell.png')} 
            style={styles.bellIcon} 
          />
        </View>
        <View style={styles.searchContainer}>
          <Image source={require('./assets/icon-kl.png')} style={styles.magnifyingGlassIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your food"
            placeholderTextColor="#FFFFFF" 
          />
          <Image source={require('./assets/icon-search.png')} style={styles.searchIcon} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.category,
                {
                  backgroundColor: selectedCategory === category.id ? '#29D697' : '#F5F5F5',
                }
              ]}
              onPress={() => handleCategoryPress(category.id)}
            >
              <Image
                source={category.icon}
                style={[
                  styles.categoryIcon,
                  {
                    tintColor: selectedCategory === category.id ? '#FFFFFF' : '#000000',
                  }
                ]}
                resizeMode="contain" 
              />
              <Text style={[
                styles.categoryText,
                {
                  color: selectedCategory === category.id ? '#FFFFFF' : '#000000',
                }
              ]}>
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={styles.imageContainer}>
          <Image source={require('./assets/burger.png')} style={styles.additionalImage} />
        </View>

        <Text style={styles.popularItemsTitle}>Popular Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularItemsContainer}>
          <View style={styles.popularItem}>
            <Image source={require('./assets/burger-item.png')} style={styles.popularItemImage} />
            <Text style={styles.popularItemText}>BURGER</Text>
          </View>
          <View style={styles.popularItem}>
            <Image source={require('./assets/pizza-item.png')} style={styles.popularItemImage} />
            <Text style={styles.popularItemText}>PIZZA</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollView: {
    flex: 1,
  },
  header: {
    width: width,
    height: 179,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    position: 'relative',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: -40,
  },
  locationSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: -40,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bellIcon: {
    width: 46,
    height: 46,
    marginTop: -40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 8,
    marginHorizontal: 16,
    marginTop: -20,
    backgroundColor: '#4A43EC', // Background color of search bar
    width: 300,
    height: 60,
    marginLeft:45,
  },
  magnifyingGlassIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    color: '#FFFFFF', 
    marginLeft:20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 8, // Adjusted margin to make space for the icon
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  category: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    width: 86,
    height: 96,
    justifyContent: 'center',
  },
  categoryIcon: {
    width: 25,
    height: 30,
  },
  categoryText: {
    marginTop: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  additionalImage: {
    width: 328,
    height: 165,
  },
  popularItemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  popularItemsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  popularItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  popularItemImage: {
    width: 159,
    height: 117,
    borderRadius: 8,
  },
  popularItemText: {
    marginTop: 8,
    fontSize: 16,
  },
});


export default HomeScreen;
