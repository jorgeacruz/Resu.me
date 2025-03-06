import { View, Image, Dimensions } from 'react-native';
import  styles  from './styles';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('screen');

export default function Slider() {
 return (
    <Swiper autoplay={false} autoplayTimeout={5}>
        <View style={styles.slideImage}>
          <Image source={require('../../assets/images/Job1.png')} style={{width: width, height: height, }} />  
        </View>
        <View style={styles.slideImage}>
        <Image source={require('../../assets/images/Job1.png')} style={{width: width, height: height, }} /> 
        </View>
        <View style={styles.slideImage}>
        <Image source={require('../../assets/images/Job1.png')} style={{width: width, height: height, }} /> 
        </View>
    </Swiper>
  );
}