import React from 'react';
import MapGoogle from '../Map/index'
import {render, waitForElement} from '@testing-library/react'
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(
            <Provider store={store}>
                <MapGoogle center={{latitude:0, longitude:0}}/>
            </Provider>
        )
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('map-field')
        )
        console.log(fieldNode)
        

    })
})