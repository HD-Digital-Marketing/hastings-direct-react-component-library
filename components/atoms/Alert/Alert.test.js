import React from 'react';
import Alert from './Alert';

describe('Check the alert renders', () => {
    test('it should render the alert', () => {

        const renderedAlert = Alert({
            theme: 'error',
            children: 'This is an error message'
        });

        expect(renderedAlert).toEqual(<div className="a-alert a-alert--error"><span className="a-alert__icon">✕</span>This is an error message</div>);
    });
});