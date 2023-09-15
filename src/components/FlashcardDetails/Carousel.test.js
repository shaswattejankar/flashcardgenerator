import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel',()=>{
    const termList = [
        {
            termImage:'',
            termDef: 'definition'
        }
    ]

    it('renders Carousel', ()=>{
        render(<Carousel termList={termList}/>);
    })

    screen.debug();
})