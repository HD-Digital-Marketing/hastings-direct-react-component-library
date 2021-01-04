import React from 'react'
import Input from './Input'

describe('Check the input renders', () => {
    test('it should render the input', () => {

        const renderedInput = Input({
            type: 'search',
            id: 'someID',
            value: '1234',
            name: 'testInput',
            placeholder: 'Test text'
        });

        expect(renderedInput).toEqual(
            <input id="someID"
                   length=""
                   maxLength=""
                   size=""
                   min=""
                   max=""
                   step=""
                   autoComplete="on"
                   type="search"
                   name="testInput"
                   placeholder="Test text"
                   className="a-input"
                   defaultValue="1234"
                   autoFocus={false}
                   disabled={false}
                   multiple={false}
                   readOnly={false}
                   required={false}
            />
            )
    });
});