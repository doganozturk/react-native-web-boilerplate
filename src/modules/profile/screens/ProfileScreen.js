import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const StyledView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: cornflowerblue;
`;

const StyledText = styled.Text`
    font-size: 20px;
    font-weight: 400;
    color: white;
`;

export default () => {
    const name = useSelector(state => state.hello.name);

    return (
        <StyledView>
            <StyledText>Kullanıcı Adı: {name}</StyledText>
        </StyledView>
    );
};
