import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import music_data from "./src/mucis-data.json"
import SongCard from "./src/components/SongCard/SongCard";
import SearchBar from "./src/components/SearchBar/SearchBar";

function App() {

    const renderSongs = ({item}) => <SongCard music={item} />
    const keySongs = item => item.id.toString()
    const [list, setList] = useState(music_data);

    const handleSearch = text => {
        const filteredList = music_data.filter( song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });
        setList(filteredList)
    };

    return(
        <SafeAreaView 
            style={styles.contanier}>

                <SearchBar onSearch={handleSearch} />

                <FlatList
                    data={list}
                    renderItem={renderSongs}
                    keyExtractor={keySongs}
                    />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: "#F6F4F5",
        flex: 1,
        flexDirection: "column"
    }
})

export default App;