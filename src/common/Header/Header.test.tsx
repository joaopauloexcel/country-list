import React from 'react';
import Header from '../Header'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Header/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('header-field')
        )
        console.log(fieldNode)
        

    })
})