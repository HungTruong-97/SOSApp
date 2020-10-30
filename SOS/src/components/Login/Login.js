import React,{Component} from 'react';
import
{
    SafeAreaView,View,Text,TouchableOpacity,Image,Dimensions
}
from 'react-native';
import {scaleSizeScreen} from '../../common/scaleSizeScreen';
import stylesCommon from '../../theme/StyleCommon';
const {width,height}=Dimensions.get('window');

export default class Login extends Component{
    constructor(props)
    {
        super(props);
    }
    onClickBtn=()=>{
        this.props.navigation.navigate('Screen_SelectRole');
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={[stylesCommon.container,{alignItems:'center'}]}>
                    <Image
                        style={{width:scaleSizeScreen(120,width),height:scaleSizeScreen(120,width),
                            marginTop:scaleSizeScreen(90,height,1)}}
                        source={require('../../assets/img/sos4.png')}
                        resizeMode='contain'
                    />
                    <TouchableOpacity style={{width:scaleSizeScreen(345,width),height:scaleSizeScreen(45,height,1),
                                borderRadius:4,backgroundColor:'#148DFD',alignItems:'center',justifyContent:'center',
                                marginTop:scaleSizeScreen(109,height,1)}}
                                activeOpacity={0.7}
                                onPress={()=>this.onClickBtn()}>
                        <Text 
                            style={{color:'#ffffff',fontFamily:'Exo2-Bold',fontSize:scaleSizeScreen(15,width)}}
                        >
                            Đăng nhập với Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:scaleSizeScreen(345,width),height:scaleSizeScreen(45,height,1),
                                borderRadius:4,backgroundColor:'#EB5757',alignItems:'center',justifyContent:'center',
                                marginTop:scaleSizeScreen(23,height,1)}}
                                activeOpacity={0.7}
                                onPress={()=>this.onClickBtn()}>
                        <Text 
                            style={{color:'#ffffff',fontFamily:'Exo2-Bold',fontSize:scaleSizeScreen(15,width)}}
                        >
                            Đăng nhập với Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}