import React from 'react';
import Search from '../Search'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Search/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('search-field')
        )
        console.log(fieldNode)
        

    })
})