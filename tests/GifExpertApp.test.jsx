import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe hacer match con el snapshot ', () => {
        
        const { container } = render( <GifExpertApp/> );
        expect(container).toMatchSnapshot();
    })

    test('debe de cambiar el valor del textbox', () => {
        
        const category = 'Elden Ring';

        render( <GifExpertApp/> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: category} } );
        
        screen.debug();
        expect( input.value ).toBe('Elden Ring');
    })
    
    
})
