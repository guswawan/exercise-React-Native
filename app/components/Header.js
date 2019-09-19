import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.headerContainer}> 
            <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    </View>
);
const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40
    },
    headerText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '600'
    }
});
export default Header;