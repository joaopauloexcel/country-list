import React from 'react';

import {render, waitForElement} from '@testing-library/react'
import CountryEdit from '.';

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<CountryEdit onSubmit={()=>console.log("test")} onCancel={()=>console.log("test")}/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('country-edit-field')
        )
        console.log(fieldNode)
        

    })
})