import { render, screen } from '@testing-library/react';
import FlashcardDetailsPage from './FlashcardDetailsPage';

it( 'renders FlashcardDetailsPage ', ()=>{
    render(FlashcardDetailsPage);
    screen.debug();
})