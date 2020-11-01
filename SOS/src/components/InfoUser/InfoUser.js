import React, { Component } from 'react';
import {
    SafeAreaView, View, Text, TouchableOpacity, Image, Dimensions,TextInput
}
    from 'react-native';
import { scaleSizeScreen } from '../../common/scaleSizeScreen';
import stylesCommon from '../../theme/StyleCommon';
import { Picker } from '@react-native-picker/picker';
const { width, height } = Dimensions.get('window');


export default class InfoUser extends Component {
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
        this.role = this.props.route.params.role;
    }
    onClickBtn = () => {
        //this.props.navigation.navigate('Screen_SelectRole');
        console.log(this.role)
    }
    renderScreenGovernment() {
        return (
            <View style={{alignItems:'center'}}>
                <View style={{ width: scaleSizeScreen(320, width), marginBottom: 5 }}>
                    <Text
                        style={{ color: '#ffffff', fontFamily: 'Exo2-Medium', fontSize: scaleSizeScreen(14, width) }}
                    >
                        Cập nhật thông tin địa phương
                    </Text>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), backgroundColor: '#ffffff',borderRadius:4 }}>
                    <Picker
                        selectedValue={this.state.citySelected}
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width) }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ citySelected: itemValue })
                        }>
                        <Picker.Item label="Chọn Tỉnh/Thành phố" value="" color='rgba(0, 0, 0, 0.6)' />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1), backgroundColor: '#ffffff',borderRadius:4 }}>
                    <Picker
                        selectedValue={this.state.districtSelected}
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width) }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ districtSelected: itemValue })
                        }>
                        <Picker.Item label="Chọn Huyện/Thị xã" value="" color='rgba(0, 0, 0, 0.6)' />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1), backgroundColor: '#ffffff',borderRadius:4 }}>
                    <Picker
                        selectedValue={this.state.communeSelected}
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width) }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ communeSelected: itemValue })
                        }>
                        <Picker.Item label="Chọn Xã/Thị trấn" value="" color='rgba(0, 0, 0, 0.6)' />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1), backgroundColor: '#ffffff',borderRadius:4 }}>
                    <Picker
                        selectedValue={this.state.villageSelected}
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width) }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ villageSelected: itemValue })
                        }>
                        <Picker.Item label="Chọn Thôn/Làng" value="" color='rgba(0, 0, 0, 0.6)' />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(25,height,1),marginBottom:5 }}>
                    <Text
                        style={{ color: '#ffffff', fontFamily: 'Exo2-Medium', fontSize: scaleSizeScreen(14, width) }}
                    >
                        Cập nhật thông tin liên lạc
                    </Text>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(name)=>this.setState({name})}
                        defaultValue={this.state.name}
                        placeholder="Họ và tên"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1)
                            , backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(phone)=>this.setState({phone})}
                        defaultValue={this.state.phone}
                        placeholder="Số điện thoại"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1)
                            , backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(role)=>this.setState({role})}
                        defaultValue={this.state.role}
                        placeholder="Chức vụ"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
            </View>
        );
    }
    renderScreenOrganization=()=>{
        return(
            <View style={{alignItems:'center'}}>
                <View style={{ width: scaleSizeScreen(320, width), marginBottom: 5 }}>
                    <Text
                        style={{ color: '#ffffff', fontFamily: 'Exo2-Medium', fontSize: scaleSizeScreen(14, width) }}
                    >
                        Cập nhật thông tin tổ chức cứu hộ
                    </Text>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(name)=>this.setState({name})}
                        defaultValue={this.state.name}
                        placeholder="Tên tổ chức/Cá nhân"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1)
                            , backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(phone)=>this.setState({phone})}
                        defaultValue={this.state.phone}
                        placeholder="Số điện thoại"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
            </View>
        );
    }
    renderScreenCollaborators=()=>{
        return(
            <View style={{alignItems:'center'}}>
                <View style={{ width: scaleSizeScreen(320, width), marginBottom: 5 }}>
                    <Text
                        style={{ color: '#ffffff', fontFamily: 'Exo2-Medium', fontSize: scaleSizeScreen(14, width) }}
                    >
                        Cập nhật thông tin cộng tác viên
                    </Text>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(name)=>this.setState({name})}
                        defaultValue={this.state.name}
                        placeholder="Tên tổ chức/Cá nhân"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginTop: scaleSizeScreen(16,height,1)
                            , backgroundColor: '#ffffff',borderRadius:4}}>
                    <TextInput
                        style={{ height: scaleSizeScreen(40, height,1), width: scaleSizeScreen(320, width)
                                ,fontSize:scaleSizeScreen(14,width) }}
                        onChangeText={(phone)=>this.setState({phone})}
                        defaultValue={this.state.phone}
                        placeholder="Số điện thoại"
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        underlineColorAndroid='rgba(255,255,255,0)'
                    />
                </View>
            </View>
        );
    }
    onClickConfirm=()=>{
        this.props.navigation.navigate("Screen_UserProfile");
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[stylesCommon.container, { alignItems: 'center' }]}>
                    <Image
                        style={{
                            width: scaleSizeScreen(60, width), height: scaleSizeScreen(60, width),
                            marginBottom: scaleSizeScreen(29, height, 1), marginTop:scaleSizeScreen(10,height,1)
                        }}
                        source={require('../../assets/img/sos4.png')}
                        resizeMode='contain'
                    />
                    {this.role==1&&this.renderScreenGovernment()
                    ||this.role==2&&this.renderScreenOrganization()
                    ||this.role==3&&this.renderScreenCollaborators()}
                    <View style={{width: scaleSizeScreen(320, width),position:'absolute',
                            alignItems:'center',bottom:scaleSizeScreen(44,height,1)}}>
                        <Text
                        style={{ color: '#ffffff', fontFamily: 'Exo2-Thin', fontSize: scaleSizeScreen(14, width),
                            textAlign:'justify'}}
                        >
                            Vui lòng điền đúng thông tin, chúng tôi sẽ liên lạc với bạn để xác minh tính xác thực qua số điện thoại.
                        </Text>
                        <TouchableOpacity style={{width:scaleSizeScreen(320,width),height:scaleSizeScreen(45,height,1),
                                borderRadius:4,backgroundColor:'#EB5757',alignItems:'center',justifyContent:'center',
                                marginTop:scaleSizeScreen(25,height,1)}}
                                activeOpacity={0.7}
                                onPress={()=>this.onClickConfirm()}>
                        <Text 
                            style={{color:'#ffffff',fontFamily:'Exo2-Bold',fontSize:scaleSizeScreen(15,width)}}
                        >
                            Xác nhận
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}