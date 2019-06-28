import React from 'react';
import styled from 'styled-components/native';

const StyledTouchableHighlight = styled.TouchableHighlight`
    width: 100%;
`;

const StyledView = styled.View`
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 5px;
    border-radius: 4px;
    background-color: coral;
`;

const StyledText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 500;
`;

// eslint-disable-next-line import/prefer-default-export,react/prop-types
export const CustomButton = ({ text, onPressHandler }) => (
    <StyledTouchableHighlight onPress={onPressHandler}>
        <StyledView>
            <StyledText>{text}</StyledText>
        </StyledView>
    </StyledTouchableHighlight>
);
