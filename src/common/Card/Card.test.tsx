import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import Card from '../Card'; 
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Teste for Card Component', () => {
    it('Verify render Component', async () => {
        //renderizar o componente
        const { getByTestId } = render(
            <Provider store={store}>
              <Card />
          </Provider>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('card-field')
        )
        console.log(fieldNode)
        //digitar no input
        // buscar o botão
        // clicar no botão
        // buscar a tabela
        // verificar se  atarefa foi adicionada

    })
})
