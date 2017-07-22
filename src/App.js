import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from "./components/header";
import AlbumList from "./components/AlbumList";
import Auth from "./auth/Auth";

const App  = () => {
    return (
        <View style={styles.container}>
            <Auth/>
            <Header headerText={'Poc Albums'} />
            <AlbumList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//
export default  App;
