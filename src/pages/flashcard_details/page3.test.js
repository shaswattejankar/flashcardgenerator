import { render, screen } from '@testing-library/react';
import page3 from './page3';

it( 'renders page3 ', ()=>{
    render(page3);
    screen.debug();
})