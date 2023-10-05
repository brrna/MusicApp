import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../SongCard/SongCard.styles"

const SongCard = ({ music }) => {
    return (
        <View
            style={styles.card}>

            <View
                style={styles.imagebox}>
                <Image source={{ uri: music.imageUrl }} style={styles.image} />
            </View>

            <View
                style={styles.text}>

                <View style={styles.title}>
                    <Text style={styles.titletext} >{music.title}</Text>
                </View>

                <View style={styles.content}>

                    <View style={styles.info}>
                        <View
                            style={styles.artist}>
                            <Text style={styles.artisttext} >{music.artist}</Text>
                        </View>

                        <View
                            style={styles.year}>
                            <Text style={styles.yeartext} >{music.year}</Text>
                        </View>
                    </View>

                    {music.isSoldOut && (
                        <View
                            style={styles.sold}>
                            <Text style={styles.soldtext} >TÜKENDİ</Text>
                        </View>
                    )}

                </View>

            </View>

        </View>
    )
}

export default SongCard;

