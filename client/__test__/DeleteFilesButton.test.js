import React from 'react';
import { shallow } from 'enzyme';
import DeleteFilesButton from '../src/js/features/files/components/DeleteFilesButton';

test('DeleteFilesButton disables delete button if no files selected', () => {
    const wrapper = shallow(
        <DeleteFilesButton
            disabled = { true }
        />
    );
    expect(wrapper.find('#bulk-delete-button').first().props().disabled).toEqual(true);
});

test('DeleteFilesButton enables delete button if files selected', () => {
    const wrapper = shallow(
        <DeleteFilesButton
            disabled = { false }
        />
    );
    expect(wrapper.find('#bulk-delete-button').first().props().disabled).toEqual(false);
});