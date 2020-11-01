import React from 'react';
import { View, Dimensions, TouchableOpacity,Platform,StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../components/News/News';
import Profile from '../components/Profile/Profile';
import Forecast from '../components/Forecast/Forecast';
import Map from '../components/Map/Map';
import Rescue from '../components/Rescue/Rescue';
import { scaleSizeScreen } from '../common/scaleSizeScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');


class MyTab extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            isChoosed:"News"
        };
    }
    onPressBottomTab=(screen,name)=>{
        this.setState({isChoosed:name});
        this.props.navigation.navigate(screen);
    }
    render() {
        return (
            <View style={{
                width: width, height: scaleSizeScreen(50,height,1), flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-around',
                backgroundColor: '#004483'
            }}>
                <TouchableOpacity
                    style={styles.iconBlur}
                    onPress={() => this.onPressBottomTab("Screen_News","News")}
                    activeOpacity={1}
                >
                    <Image 
                        source={this.state.isChoosed=="News"?require("../assets/img/News-highlights.png"):require("../assets/img/News.png")}
                        style={{width:scaleSizeScreen(18,width),height:scaleSizeScreen(18,width)}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconBlur}
                    onPress={() => this.onPressBottomTab("Screen_Forecast","Forecast")}
                    activeOpacity={1}
                >
                    <Image 
                        source={this.state.isChoosed=="Forecast"?require("../assets/img/Forecast-hightlights.png"):require("../assets/img/Forecast.png")}
                        style={{width:scaleSizeScreen(18,width),height:scaleSizeScreen(18,width)}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconBlur}
                    onPress={() =>this.onPressBottomTab("Screen_Map","Map")}
                    activeOpacity={1}
                >
                    <Image 
                        source={this.state.isChoosed=="Map"?require("../assets/img/Map-highlights.png"):require("../assets/img/Map.png")}
                        style={{width:scaleSizeScreen(18,width),height:scaleSizeScreen(18,width)}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconBlur}
                    onPress={() =>this.onPressBottomTab("Screen_Rescue","Rescue")}
                    activeOpacity={1}
                >
                    <Image 
                        source={this.state.isChoosed=="Rescue"?require("../assets/img/Rescue-highlights.png"):require("../assets/img/Rescue.png")}
                        style={{width:scaleSizeScreen(18,width),height:scaleSizeScreen(18,width)}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconBlur}
                    onPress={() =>this.onPressBottomTab("Screen_Profile","Profile")}
                    activeOpacity={1}
                >
                    <Image 
                        source={this.state.isChoosed=="Profile"?require("../assets/img/Profile-highlights.png"):require("../assets/img/Profile.png")}
                        style={{width:scaleSizeScreen(18,width),height:scaleSizeScreen(18,width)}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const Tab = createBottomTabNavigator();
export default class BottomTab extends React.Component {
    render() {
        return (
                <Tab.Navigator tabBar={props => <MyTab {...props} />} >
                    <Tab.Screen name="Screen_News" component={News} />
                    <Tab.Screen name="Screen_Forecast" component={Forecast} />
                    <Tab.Screen name="Screen_Map" component={Map} />
                    <Tab.Screen name="Screen_Rescue" component={Rescue} />
                    <Tab.Screen name="Screen_Profile" component={Profile} />
                </Tab.Navigator>
        );
    }
}

var styles = StyleSheet.create({
    iconBlur: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0)',
        width:0.15*width,
        height:0.06*height,
    },
});