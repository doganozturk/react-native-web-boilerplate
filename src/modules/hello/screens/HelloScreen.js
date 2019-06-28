import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { CustomButton } from '@/components';
import { setName } from '@/modules/hello/actions';

const StyledView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: tomato;
`;

const StyledContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const StyledTextInput = styled.TextInput`
    width: 200px;
    height: 40px;
    padding: 5px;
    background-color: white;
`;

const StyledText = styled.Text`
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    color: whitesmoke;
`;

const StyledButtonContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 200px;
    margin-top: 20px;
`;

export default () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    const onChangeTextHandler = text => {
        setValue(text);
    };

    const onPressHandler = () => {
        if (!value) return;

        dispatch(setName(value));

        navigate('Profile');
    };

    return (
        <StyledView>
            <StyledContainer>
                <StyledText>Hoşgeldiniz!</StyledText>
                <StyledText>Lütfen adınızı girin ve butona tıklayın!</StyledText>
            </StyledContainer>
            <StyledContainer>
                <StyledTextInput value={value} onChangeText={onChangeTextHandler} />
            </StyledContainer>
            <StyledButtonContainer>
                <CustomButton text="TIKLA !!!" onPressHandler={onPressHandler} />
            </StyledButtonContainer>
        </StyledView>
    );
};
