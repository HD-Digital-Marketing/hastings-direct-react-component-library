import React from 'react';
import Title from './Title';

describe('Check the title renders', () => {
    test('it should render the title', () => {

        const renderedTitle = Title({
            theme: 'primary',
            titleType: 'h3',
            children: 'I am a h3 title'
        });

        expect(renderedTitle).toEqual(<h3 className="a-title a-title--primary">I am a h3 title</h3>);
    });
});