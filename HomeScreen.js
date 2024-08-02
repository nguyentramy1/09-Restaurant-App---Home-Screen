import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';  
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

const { height, width } = Dimensions.get('window');

const slides = [
    { key: '1', image: require('./assets/burger.png') },
    { key: '2', image: require('./assets/burger.png') },
    { key: '3', image: require('./assets/burger.png') }
];

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

  const renderSlide = ({ item }) => (
    <View style={styles.slide}>
        <Image source={item.image} style={styles.slideImage} />
    </View>
  );

  const renderNextButton = () => <View style={styles.hiddenButton} />;
  const renderDoneButton = () => <View style={styles.hiddenButton} />;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <LinearGradient colors={['rgba(230, 230, 230, 0)', '#FEFFBF']} style={styles.topBackground} />
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

        <View style={styles.sliderContainer}>
          <AppIntroSlider
              renderItem={renderSlide}
              data={slides}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
              renderNextButton={renderNextButton}
              renderDoneButton={renderDoneButton}
          />
        </View>

        <View style={styles.popularItemsHeader}>
          <Text style={styles.popularItemsTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 179,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    position: 'relative',
  },
  topBackground: {
    position: 'absolute',
    width: 385,
    height: 179,
    borderRadius: 33,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
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
    width: '80%',
    height: 60,
    alignSelf: 'center',
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
    marginLeft: 20,
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
    justifyContent: 'center',
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    width: 86,
    height: 96,
    marginTop:30
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  sliderContainer: {
    width: width,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.3,
  },
  slideImage: {
    width: 328,
    height: 165,
    resizeMode: 'cover',
  },
  dotStyle: {
    backgroundColor: '#D9D9D9',
    marginTop: 100
  },
  activeDotStyle: {
    backgroundColor: '#242424',
    marginTop:100
  },
  popularItemsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 16,
  },
  popularItemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 16,
    color:'#606060',
    fontWeight: 'bold',
  },
  popularItemsContainer: {
    paddingLeft: 16,
    paddingTop: 8,
  },
  popularItem: {
    width: 150,
    height: 200,
    marginRight: 16,
  },
  popularItemImage: {
    width: 159,
    height: 117,
    borderRadius: 16,
  },
  popularItemText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  hiddenButton: {
    width: 0,
    height: 0,
    opacity: 0,
  },
});

export default HomeScreen;
