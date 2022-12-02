import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { Provider } from 'react-native-paper';


const Separator = () => (
  <View style={styles.separator} />
);

<Logo/>

const RouteScreen = () => (
    <Provider theme={theme}>
    <Background>
    <Logo />
    <Header>Rutas</Header>
        <View>
            <Paragraph>
                Poniente N, 999, orizaba Ver, 93400
            </Paragraph>
            <Button
                title="Ver en el mapa"
                color={"#0c4474"}
                onPress={() => Alert.alert('Simple Button pressed')}    
            />
        </View>
        <Separator />
        <View>
            <Paragraph>
                Norte N, 999, orizaba Ver, 93400
            </Paragraph>
            <Button
                title="Ver en el mapa"
                color={"#0c4474"}
                onPress={() => Alert.alert('Simple Button pressed')}    
            />
        </View>
        <Separator />
        <View>
            <Paragraph>
                Norte N, 999, orizaba Ver, 93400
            </Paragraph>
            <Button
                title="Ver en el mapa"
                color={"#0c4474"}
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
        <Separator />
        <View>
            <Paragraph>
                Norte N, 999, orizaba Ver, 93400
            </Paragraph>
            <Button
                title="Ver en el mapa"
                color={"#0c4474"}
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    </Background>
    </Provider>
    );

    const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#0c4474',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    });

export default RouteScreen;