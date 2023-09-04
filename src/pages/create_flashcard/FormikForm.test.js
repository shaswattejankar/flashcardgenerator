import { render, screen } from '@testing-library/react';
import { FormikForm } from './FormikForm';

import { Provider } from "react-redux";
import Store from "../../store/Store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

describe('FormikForm',()=>{

    it('renders FormikForm properly ', async ()=>{
        const persistor = persistStore(Store);

        render(
            <Provider store={Store}>
              <PersistGate persistor={persistor}>
                <FormikForm/>
              </PersistGate>
            </Provider>
        );
        
        
    })


})