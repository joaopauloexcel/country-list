import React from 'react';
import CountryAbout from '../CountryAbout'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<CountryAbout/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('country-about-field')
        )
        console.log(fieldNode)
        

    })
})