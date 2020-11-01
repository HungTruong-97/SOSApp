import React, { Component } from 'react';
import {
    SafeAreaView, View, Text, TouchableOpacity, Image, Dimensions,TextInput
}
    from 'react-native';
import { scaleSizeScreen } from '../../common/scaleSizeScreen';
import stylesCommon from '../../theme/StyleCommon';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const { width, height } = Dimensions.get('window');


export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citySelected: '',
            districtSelected:'',
            communeSelected:'',
            villageSelected:'',
            name:'',
            phone:'',
            role:'',
        };
    }
    
    onClickConfirm=()=>{
        this.props.navigation.navigate("Screen_BottomTab");
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[stylesCommon.container, { alignItems: 'center' }]}>
                    <TouchableOpacity 
                        style={{width:width,flexDirection:'row',justifyContent:'space-between',
                                alignItems:'center',marginTop:15}}
                        activeOpacity={0.8}
                        >
                        <View style={{marginLeft:10, flexDirection:'row',alignItems:'center'}}>
                            <Image
                                style={{
                                    width: scaleSizeScreen(50, width), height: scaleSizeScreen(50, width),marginRight:scaleSizeScreen(23,width)}}
                                source={require('../../assets/img/sos4.png')}
                                resizeMode='contain'
                            />
                            <Text
                                style={{ color: '#ffffff', fontFamily: 'Exo2-Medium', fontSize: scaleSizeScreen(14, width) }}
                            >
                                Bùi Tuấn Dũng{'\n'} 
                                <Text
                                style={{ color: '#ffffff', fontFamily: 'Exo2-Regular', fontSize: scaleSizeScreen(14, width) }}
                            >
                                0908888888
                                
                            </Text>
                            </Text>
                        </View>
                        <EvilIcons name="chevron-right" size={scaleSizeScreen(30,width)} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:width,height:scaleSizeScreen(50,height,1),backgroundColor:'#148DFD',
                                marginTop:scaleSizeScreen(18,height,1),flexDirection:'row',
                                justifyContent:'space-between',alignItems:'center'}}
                                onPress={()=>this.onClickConfirm()}
                                activeOpacity={0.8}>
                        <Text
                                style={{ color: '#ffffff', fontFamily: 'Exo2-SemiBold', fontSize: scaleSizeScreen(14, width),
                                marginLeft:scaleSizeScreen(21,width)}}
                            >
                                Tham gia cứu hộ
                        </Text>
                        <EvilIcons name="chevron-right" size={scaleSizeScreen(30,width)} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}