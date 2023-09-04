import { render, screen } from '@testing-library/react';
import page1 from './page1';

test('render page1',()=>{
    render(page1);
    screen.debug();
});