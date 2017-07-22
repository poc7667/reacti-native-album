import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from "../components/LoginForm";

class Auth extends Component{
    render(){
        return (
            <View>
                <Text>
                    AUTH....
                </Text>
                <LoginForm/>
            </View>
        )
    }
}

export default Auth;