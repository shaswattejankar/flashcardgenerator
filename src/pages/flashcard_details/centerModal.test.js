import { render, screen } from '@testing-library/react';
import CenterModal from './centerModal';
import { MyVerticallyCenteredModal } from './centerModal';

test('rendering the CenterModal', ()=>{
    
    render(<CenterModal/>);

    screen.debug();
})

test('rendering Centered Modal', ()=>{
   

    render(<MyVerticallyCenteredModal show={true}  />);
    screen.debug();
})