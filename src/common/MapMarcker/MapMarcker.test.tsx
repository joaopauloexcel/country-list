import React from 'react';
import MapMarcker from '../MapMarcker'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<MapMarcker/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('map-marcker-field')
        )
        console.log(fieldNode)
        

    })
})