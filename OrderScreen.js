import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ShoppingCart = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient colors={['rgba(230, 230, 230, 0)', '#FEFFBF']} style={styles.topBackground} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('./assets1/back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Shopping Cart</Text>
        <TouchableOpacity>
          <Image source={require('./assets1/trash-can.png')} style={styles.trashIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={require('./assets1/burger-to.png')} style={styles.burgerImage} />
        <View style={styles.viewprice}>
          <View style={styles.burgerThumbnails}>
            <Image source={require('./assets1/burger1.png')} style={styles.thumbnail} />
            <Image source={require('./assets1/burger2.png')} style={styles.thumbnail} />
            <Image source={require('./assets1/burger3.png')} style={styles.thumbnail} />
          </View>
          <View style={styles.titlePriceContainer}>
            <Text style={styles.burgerTitle}>BURGER</Text>
            <Text style={styles.price}>$28</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Image source={require('./assets1/star.png')} style={styles.starIcon} />
            <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
            <View style={styles.quantityButtons}>
              <TouchableOpacity onPress={increaseQuantity}>
                <Image source={require('./assets1/Plus.png')} style={styles.quantityButton} />
              </TouchableOpacity>
              <Text style={styles.quantityNumber}>{quantity < 10 ? '0' + quantity : quantity}</Text>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Image source={require('./assets1/Minus.png')} style={styles.quantityButton} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.deliveryContainer}>
            <View style={styles.deliveryAddressContainer}>
              <Image source={require('./assets1/icon-location.png')} style={styles.locationIcon} />
              <View>
                <Text style={styles.deliveryText}>Delivery Address</Text>
                <Text style={styles.deliveryAddress}>Dhaka, Bangladesh</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Image source={require('./assets1/icon-edit.png')} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.paymentContainer}>
            <Image source={require('./assets1/payment-card.png')} style={styles.paymentCardIcon} />
            <Text style={styles.paymentText}>Payment Method</Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryContainer}>
            <Text style={[styles.summaryTitle, styles.summaryBorder]}>Checkout Summary</Text>
            <View style={[styles.summaryRow, styles.summaryBorder]}>
              <Text style={styles.summaryText}>Subtotal ({quantity})</Text>
              <Text style={styles.summaryPrice}>${(28 * quantity).toFixed(2)}</Text>
            </View>
            <View style={[styles.summaryRow, styles.summaryBorder]}>
              <Text style={styles.summaryText}>Delivery Fee</Text>
              <Text style={styles.summaryPrice}>$6.20</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={[styles.summaryText, styles.payableText]}>Payable Total</Text>
              <Text style={[styles.summaryPrice, styles.payablePrice]}>${(28 * quantity + 6.2).toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#ddd',
    marginTop: 10,
  },
  backIcon: {
    width: 20,
    height: 14,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBackground: {
    position: 'absolute',
    width: width,
    height: 179,
    borderRadius: 33,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 16,
  },
  burgerImage: {
    width: 327,
    height: 214,
    borderRadius: 12,
    marginBottom: 8,
  },
  burgerThumbnails: {
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  viewprice: {
    backgroundColor: '#F5F5F5',
    width: 327,
    padding: 16,
    borderRadius: 12,
    marginTop: -20,
    position: 'relative',
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 20,
  },
  burgerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
    marginLeft: 15,
  },
  ratingText: {
    fontSize: 10,
    color: '#3D3D3D',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    marginRight: 16,
    color: '#7D78F1',
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 55,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 4,
  },
  quantityNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 16,
  },
  deliveryAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4F1DD',
    padding: 12,
    borderRadius: 6,
    height: 67,
    width: 210,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    alignSelf: 'center',
  },
  deliveryText: {
    fontSize: 16,
  },
  deliveryAddress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#D1C4E9',
    padding: 12,
    height: 67,
    width: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#F9F9F9',
    width: 327,
    marginLeft: -16,
  },
  paymentCardIcon: {
    width: 39,
    height: 25,
    marginRight: 8,
  },
  paymentText: {
    fontSize: 16,
    flex: 1,
  },
  changeButton: {
    padding: 4,
  },
  changeText: {
    fontSize: 16,
    color: 'blue',
    borderWidth: 1,
    borderColor: '#4A43EC',
    borderRadius: 100,
    height: 30,
    width: 79,
    textAlign: 'center',
  },
  summaryContainer: {
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  summaryText: {
    fontSize: 16,
    color: '#777',
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  payableText: {
    color: '#000',
    fontWeight: 'bold',
  },
  payablePrice: {
    color: 'blue',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4A43EC',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ShoppingCart;
