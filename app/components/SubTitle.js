import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { linghterWhite } from '../utils/Colors';

const SubTitle = ({ subtitle }) => (
    <Text style={[styles.subtitleText, { color: linghterWhite }]}>
        {subtitle.toUpperCase()}
    </Text>
);

const styles = StyleSheet.create({
    subtitleText: {
        fontSize: 16,
        fontWeight: '500'
    }
});

export default SubTitle;