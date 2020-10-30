import React,{Component} from 'react';
import
{
    SafeAreaView,View,Text,TouchableOpacity,Image,Dimensions
}
from 'react-native';
import {scaleSizeScreen} from '../../common/scaleSizeScreen';
import stylesCommon from '../../theme/StyleCommon';
const {width,height}=Dimensions.get('window');

export default class SelectRole extends Component{
    constructor(props)
    {
        super(props);
    }
    onClickBtn=(role)=>{
        this.props.navigation.navigate('Screen_InfoUser',{role:role});
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={[stylesCommon.container,{alignItems:'center'}]}>
                    <Image
                        style={{width:scaleSizeScreen(120,width),height:scaleSizeScreen(120,width),
                            marginTop:scaleSizeScreen(90,height,1),marginBottom:scaleSizeScreen(72,height,1)}}
                        source={require('../../assets/img/sos4.png')}
                        resizeMode='contain'
                    />
                    <View style={{width:scaleSizeScreen(345,width),marginBottom:5}}>
                        <Text 
                                style={{color:'#ffffff',fontFamily:'Exo2-Medium',fontSize:scaleSizeScreen(14,width)}}
                            >
                                Bạn là:
                        </Text>
                    </View>
                    <TouchableOpacity style={{width:scaleSizeScreen(345,width),height:scaleSizeScreen(45,height,1),
                                borderRadius:4,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center'}}
                                activeOpacity={0.7}
                                onPress={()=>this.onClickBtn(1)}>
                        <Text 
                            style={{color:'#F14242',fontFamily:'Exo2-Bold',fontSize:scaleSizeScreen(15,width)}}
                        >
                            Chính quyền địa phương
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:scaleSizeScreen(345,width),height:scaleSizeScreen(45,height,1),
                                borderRadius:4,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center',
                                marginTop:scaleSizeScreen(23,height,1)}}
                                activeOpacity={0.7}
                                onPress={()=>this.onClickBtn(2)}>
                        <Text 
                            style={{color:'#F14242',fontFamily:'Exo2-Bold',fontSize:scaleSizeScreen(15,width)}}
                        >
                            Tổ chức cứu hộ
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:scaleSizeScreen(345,width),height:scaleSizeScreen(45,height,1),
                                borderRadius:4,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center',
                                marginTop:scaleSizeScreen(23,height,1)}}
                                activeOpacity={0.7}
                                onPress={()=>this.onClickBtn(3)}>
                        <Text 
                            style={{color:'#F14242',fontFamily:'Exo2-Bold',fontSize:scaleSizeScreen(15,width)}}
                        >
                            Cộng tác viên 
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}