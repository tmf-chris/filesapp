import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '../src/js/features/dialogs/components/IconButton';

test('Icon button click calls supplied callback', () => {
    let actionDone = false;
    const action = () => {
        actionDone = true;
    };

    const wrapper = shallow(<IconButton action={action} label='Button'/>);
    const button = wrapper.find('.action-button');
    button.simulate('click');
    expect(actionDone).toBe(true);
});