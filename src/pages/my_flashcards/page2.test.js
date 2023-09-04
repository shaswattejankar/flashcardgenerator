import { render, screen } from '@testing-library/react';
import page2 from './page2';

it( 'renders page2 ', ()=>{
    render(page2);
    screen.debug();
})