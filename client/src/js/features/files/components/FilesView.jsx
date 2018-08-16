import React from 'react';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import BulkFileHandler from './BulkFileHandler';
import * as Constants from '../../../constants';
import 'react-table/react-table.css';
const moment = require('moment-timezone');

const CheckboxTable = checkboxHOC(ReactTable);

const columns = [
    {
        id: 'Name',
        Header: 'Name',
        accessor: d => { const url = Constants.SERVER_URL+'files/'+d.id; return <a href={url} target="_blank">{d.name}</a> },
        filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
    },
    {
        id: 'Date',
        Header: 'Upload Date',
        accessor: d => moment.utc(d.updated_at).local().format('YYYY-MM-DD HH:mm:ss')
    },
    {
        id: 'edit',
        accessor: 'id',
        Cell: ({value}) => (<button onClick={() => handleDelete({value})}>Delete</button>)
    },
];

const FilesView = ({ files, selection, selectAll, setRef, toggleSelection, toggleAll, isSelected, bulkDelete, ...otherProps }) => {
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
            <BulkFileHandler selection={selection} bulkAction={bulkDelete} bulkLabel='Delete'/>
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