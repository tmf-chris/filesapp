import React from 'react';
import ReactTable from 'react-table';
import checkboxHOC from "react-table/lib/hoc/selectTable";
import * as Constants from '../../../constants';
import 'react-table/react-table.css';
const moment = require('moment-timezone');

const CheckboxTable = checkboxHOC(ReactTable);

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
    },
    {
        id: 'Date',
        Header: 'Upload Date',
        accessor: d => moment.utc(d.updated_at).local().format('YYYY-MM-DD HH:mm:ss')
    }
];

const FilesView = ({ files, selection, selectAll, setRef, toggleSelection, toggleAll, isSelected, ...otherProps }) => {
    const checkboxProps = {
        selectAll,
        isSelected,
        toggleSelection,
        toggleAll,
        selectType: "checkbox",
        getTrProps: (s, r) => {
            const selected = typeof r !== 'undefined' && isSelected(r.original._id);
            return {
                style: {
                    backgroundColor: selected ? "lightgreen" : "inherit"
                }
            };
        }
    };

    return (
        <div style={{ marginRight: '64px'}}>
            <CheckboxTable
                ref={setRef}
                data={files.data}
                columns={[{
                    Header: "Files",
                    columns: columns
                }]}
                loading={files.status === Constants.REQUESTING}
                filterable
                defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
                className="-striped -highlight"
                {...checkboxProps}
            />
        </div>
    );
};

export default FilesView;