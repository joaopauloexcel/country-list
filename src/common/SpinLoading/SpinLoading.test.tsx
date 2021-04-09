import React from 'react';
import SpinLoading from '../SpinLoading'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<SpinLoading/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('spin-loading-field')
        )
        console.log(fieldNode)
        

    })
})