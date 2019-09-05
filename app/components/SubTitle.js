import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { linghterWhite } from '../utils/Colors';

const SubTitle = ({ subtitle }) => (
    <Text style={[styles.titleText, { color: linghterWhite }]}>
        {subtitle.toUpperCase()}
    </Text>
);

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: '500'
    }
});

export default SubTitle;