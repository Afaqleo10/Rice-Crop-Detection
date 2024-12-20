import React from "react";
import { View, ImageBackground } from "react-native";

const BackgroundComponent = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("./assets/leaves.jpg")} style={{ height: '100%' }}>
                <View style={{position: "absolute" }}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
}

export default BackgroundComponent;
