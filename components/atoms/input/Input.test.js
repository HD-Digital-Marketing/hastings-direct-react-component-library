import React from 'react';
import Input from './Input';

describe('Check the input renders', () => {
    test('it should render the input', () => {

        const renderedInput = Input({
            type: 'search',
            value: '1234',
            name: 'testInput',
            placeholder: 'Test text'
        });

        expect(renderedInput).toEqual(<input type="search" name="testInput" className="a-input" placeholder="Test text" defaultValue="1234" />);
    });
});