import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from '../src/js/features/dialogs/components/ActionButton';

test('Action button click calls supplied callback', () => {
    let actionDone = false;
    const action = () => {
        actionDone = true;
    };

    const wrapper = shallow(<ActionButton action={action} label='Button'/>);
    const button = wrapper.find('.action-button');
    button.simulate('click');
    expect(actionDone).toBe(true);
});