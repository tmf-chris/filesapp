import React from 'react';
import ActionButton from '../src/js/features/dialogs/components/ActionButton';
import renderer from 'react-test-renderer';

test('Action button', () => {
    const component = renderer.create(
        <ActionButton action={(e) => {}} label='Button'/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});