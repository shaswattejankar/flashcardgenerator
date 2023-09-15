import { render, screen } from '@testing-library/react';
import CreateFlashcardPage from './CreateFlashcardPage';

test('render CreateFlashcardPage',()=>{
    render(CreateFlashcardPage);
    screen.debug();
});