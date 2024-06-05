import React from "react";
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Переклад Українська -> Англійська"
                onPress={() => navigation.navigate('UkrToEng')}
            />
            <Button
                title="Переклад Англійська -> Українська"
                onPress={() => navigation.navigate('EngToUkr')}
            />
        </View>
    );
};