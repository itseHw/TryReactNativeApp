import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import React, { createContext, useContext, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import styles from "../styles/product.style";
import { RatingInput } from "react-native-stock-star-rating";
import { theme } from "../constants/theme";
import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { increment, decrement, handlePress, handleCart } from '../utils/product_helpers';
import { LoginContext } from '../contexts/UserLoginContext';
import { FavContext } from '../contexts/RefetchFavContext';
import { CartContext } from '../contexts/UserCartContext';



// export default function ProductDetail({ navigation }) {
export default function ProductDetail({navigation}) {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const {userLogin, setUserLogin} = useContext(LoginContext);
  const {refechFav, setRefechFav} = useContext(FavContext);
  const {userCart, setUserCart} = useContext(CartContext);
  
  const route = useRoute();
  // console.log("my route object ", route);
  const item = route.params.item;

  console.log("product id is ", item.id)
  console.log("fav id ", refechFav);
  return (
    <View style = {styles.container}>
      <Image  
          style= { styles.image }
          source= { item.path }
      />
      <View style = { styles.details }>
        {/* this is for title and price */}
        <View style = { styles.titleRow }>
          <Text style ={ styles.title } >{item.title}</Text>
          <Text style = { styles.price }>{ item.price }</Text>
        </View>

        <View style={ styles.ratingRow }>
          {/* This is for star rating*/}
          <View style = { styles.rating }>
            <RatingInput 
              rating = { rating }
              setRating = { setRating }
              size = { 25 }
              maxStars = { 5 } //Full mark or Star is
              color = { theme.colors.softblue }
            />
            <Text>[4.9]</Text>
          </View>
          {/* this is for plus and minus */}
          <View style = { styles.rating }>
            <TouchableOpacity onPress={ ()=>increment(setCount, count) }>
              <SimpleLineIcons name = "plus" size={ 20 }/>
            </TouchableOpacity>
            <Text style ={ styles.textSpace }>
              { count }
            </Text>
            <TouchableOpacity onPress={ ()=>decrement(setCount, count) }>
              <SimpleLineIcons name = "minus" size={ 20 }/>
            </TouchableOpacity>
          </View>
        </View>

        {/* this is for showing description */}
        <View style = { styles.descriptionWrapper}>
          <Text style = { styles.descriptionTitle}>
            Description
          </Text>
          <Text style = { styles.descriptionText}>
            This is a {item.title} !
          </Text>
        </View>

        {/* showing location */}
        <View style= { styles.locationView }>
          {/* put everything in a row or horizantional*/}
          <View style = { styles.location}>
            {/* show icon and location name */}
            <View style = {styles.locationWrapper}>
              <Ionicons name = "location-outline" size = {17} />
              <View style = { styles.locationShowView}>
                <Text>HK</Text>
              </View>
            </View>

            {/* delivery info showing an Icon and Text */}
            <View style = {styles.deliveryInfo}>
              <MaterialCommunityIcons name = "truck-delivery-outline"  size = {19}/>
              <View style = {styles.freeDelivery}>
                <Text> Free Delivery</Text>
              </View>

            </View>
          </View>
        </View>

        {/* car related information */}
        <View style = {styles.carrtRow}>
          {/* fav button */}
          <TouchableOpacity
            onPress={ () => handlePress(userLogin, navigation, item, setRefechFav) }
            style = { styles.favButton }
          >
            <AntDesign
              name = "heart"
              size = { 17 }
              color={ theme.colors.grey }
            />

          </TouchableOpacity>  
          {/* buy button */}
          <TouchableOpacity
            onPress={ () => console.log("buy tapped") }
            style = { styles.buyButton }
          >
            <Text style = { styles.cartTitle}> Buy Now </Text>
          </TouchableOpacity>

          {/* shopping bag icon */}
          <TouchableOpacity
            onPress={ () => handleCart(navigation, item, count, userLogin, setUserCart) }
            style = { styles.addCart }
          >
            <Fontisto
              name = "shopping-bag"
              size = { 17 }
              color = {theme.colors.lavender}
            />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}