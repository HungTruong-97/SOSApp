import React,{Component} from 'react';
import
{
    SafeAreaView,View,Text,Dimensions
}
from 'react-native';
const {width,height}=Dimensions.get('window');

export default class News extends Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}> 
                <Text>News</Text>
            </SafeAreaView>
        );
    }
}