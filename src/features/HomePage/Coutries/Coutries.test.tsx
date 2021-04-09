import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import Coutries from '../Coutries';
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { ApolloProvider } from '@apollo/client';
import client from '../../../apollo';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Teste for Card Component', () => {
    it('Verify render Component', async () => {
        //renderizar o componente
        const { getByTestId } = render(
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Coutries />
                </Provider>
            </ApolloProvider>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('countries-field')
        )
        console.log(fieldNode)
        //digitar no input
        // buscar o botão
        // clicar no botão
        // buscar a tabela
        // verificar se  atarefa foi adicionada

    })
})
