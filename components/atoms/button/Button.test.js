import React from 'react';
import Button from './Button';

describe('Check the button renders', () => {
    test('it should render the button', () => {

        const renderedButton = Button({
            theme: 'primary',
            type: 'button',
            children: 'Click me'
        });

        expect(renderedButton).toEqual(<button className="a-btn a-btn--primary" type="button">Click me</button>);
    });
});