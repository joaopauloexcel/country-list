import React from 'react';
import Footer from '../Footer'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Footer/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('footer-field')
        )
        console.log(fieldNode)
        

    })
})