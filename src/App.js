import React from 'react';
import { Provider } from 'react-redux';
import NavigatorWrapper from '@/navigation/index';
import store from '@/store';

export default function App() {
    return (
        <Provider store={store({})}>
            <NavigatorWrapper />
        </Provider>
    );
}
