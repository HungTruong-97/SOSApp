import React, { Component } from 'react';
import {
    SafeAreaView, View, Text, TouchableOpacity, Image, Dimensions
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
            language: '',
        };
        this.role = this.props.route.params.role;
    }
    onClickBtn = () => {
        //this.props.navigation.navigate('Screen_SelectRole');
        console.log(this.role)
    }
    renderScreenGovernment() {
        return (
            <View>
                <View style={{ width: scaleSizeScreen(345, width), marginBottom: 5 }}>
                    <Text
                        style={{ color: '#ffffff', fontFamily: 'Exo2-Medium', fontSize: scaleSizeScreen(14, width) }}
                    >
                        Cập nhật thông tin địa phương
                    </Text>
                </View>
                <View style={{ width: scaleSizeScreen(320, width), marginBottom: 5, backgroundColor: '#ffffff',borderRadius:4 }}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: scaleSizeScreen(30, height,1), width: scaleSizeScreen(320, width) }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Chọn Tỉnh/Thành phố" value="" color='rgba(0, 0, 0, 0.6)' />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>
        );
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[stylesCommon.container, { alignItems: 'center' }]}>
                    <Image
                        style={{
                            width: scaleSizeScreen(60, width), height: scaleSizeScreen(60, width),
                            marginBottom: scaleSizeScreen(29, height, 1)
                        }}
                        source={require('../../assets/img/sos4.png')}
                        resizeMode='contain'
                    />
                    {this.renderScreenGovernment()}
                </View>
            </SafeAreaView>
        );
    }
}