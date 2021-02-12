import React from 'react';
import List from './List';

describe('Check the unordered list renders', () => {
    test('it should render the unordered list', () => {

        const renderedUnorderedList = List({
            theme: 'primary',
            type: 'ul'
        });

        expect(renderedUnorderedList).toEqual(<ul className="a-list a-list--primary" type="ul">{listItems}</ul>);
    });
});

describe('Check the ordered list renders', () => {
    test('it should render the ordered list', () => {

        const renderedOrderedList = List({
            theme: 'secondary',
            type: 'ol'
        });

        expect(renderedOrderedList).toEqual(<ol className="a-list a-list--secondary" type="ol">{listItems}</ol>);
    });
});
