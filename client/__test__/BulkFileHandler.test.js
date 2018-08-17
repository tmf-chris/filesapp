import React from 'react';
import { shallow } from 'enzyme';
import BulkFileHandler from '../src/js/features/files/components/BulkFileHandler';

test('Bulk file handler disables delete button if no files selected', () => {
    const wrapper = shallow(
        <BulkFileHandler
            disabled = { true }
        />
    );
    expect(wrapper.find('#bulk-delete-button').first().props().disabled).toEqual(true);
});

test('Bulk file handler enables delete button if files selected', () => {
    const wrapper = shallow(
        <BulkFileHandler
            disabled = { false }
        />
    );
    expect(wrapper.find('#bulk-delete-button').first().props().disabled).toEqual(false);
});