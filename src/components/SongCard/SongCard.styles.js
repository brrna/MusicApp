import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    card: {
        backgroundColor: "#F6F4F5",
        width: wp("100%"),
        height: hp("18%"),
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#E3DDE0"
    },
    imagebox: {
        backgroundColor: "#F6F4F5",
        width: wp("30%"),
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        backgroundColor: "#F6F4F5",
        justifyContent: "center",
        alignItems: "center",
        height: hp("14%"),
        width: wp("30%"),
        borderWidth: 1,
        borderColor: "#DAD2D6",
        borderRadius: 1000,
        resizeMode: "contain"
    },
    text: {
        backgroundColor: "#F6F4F5",
        width: wp("67%"),
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginLeft: 5
    },
    title: {
        backgroundColor: "#F6F4F5",
        height: hp("5%"),
        width: wp("43%"),
        marginTop: 8,
        justifyContent: "center"
    },
    titletext: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    content: {
        backgroundColor: "#F6F4F5",
        height: hp("6%"),
        width: wp("65%"),
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-between"
    },
    info: {
        backgroundColor: "#F6F4F5",
        height: hp("5%"),
        width: wp("45%"),
        flexDirection: "row",
       
        alignSelf: "center",
        alignItems: "center"
    },
    artist: {
        backgroundColor: "#F6F4F5",
        width: wp("33%"),
        height: hp("4%"),
        justifyContent: "center"
    },
    artisttext: {
        fontWeight: "400",
        fontSize: 15,
    },
    year: {
        backgroundColor: "#F6F4F5",
        width: wp("9%"),
        height: hp("2%"),
    },
    yeartext: {
        fontSize: 15
    },
    sold: {
        backgroundColor: "#F6F4F5",
        width: wp("15%"),
        height: hp("3%"),
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#9F1F19",
        borderWidth: 1
    },
    soldtext: {
        color: "#9F1F19",
        fontWeight: "bold",
        fontSize: 13
    }
})