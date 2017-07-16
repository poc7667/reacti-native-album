import React from 'react';
import {Image, Text, View, Linking} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import AlbumButton from "./Button";

const AlbumDetail = (props) => {
    console.log(JSON.stringify(props))
    const { title, artist, thumbnail_image, image, url } = props.album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image}}>
                    </Image>
                </View>
                <View>
                    <Text>{props.album.title} 123 </Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <AlbumButton onPress={()=> {
                    console.log(url);
                    Linking.openURL(url)
                }}></AlbumButton>
            </CardSection>
        </Card>
    )
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle:{
        height: 200,
        flex: 1,
        width: null
    }
};


export default AlbumDetail