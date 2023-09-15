import { render, screen } from '@testing-library/react';
import MyFlashcardsPage from './MyFlashcardsPage';

it( 'renders MyFlashcardsPage ', ()=>{
    render(MyFlashcardsPage);
    screen.debug();
})