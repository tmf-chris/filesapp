import React from 'react';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import BulkFileHandler from './BulkFileHandler';
import * as Constants from '../../../constants';
import { getBytesFromFileSizeString, sortFileSizeStrings, formatBytes } from '../../../utils';
import 'react-table/react-table.css';
const moment = require('moment-timezone');

const CheckboxTable = checkboxHOC(ReactTable);

const columns = [
    {
        id: 'Name',
        Header: 'Name',
        headerStyle: { textAlign: 'left' },
        accessor: d => {
            const url = Constants.SERVER_URL+'files/'+d.id;
            return <a href={url} target="_blank">{d.name}</a>
        },
        filterMethod: (filter, row) => {
            return row[filter.id].props.children.includes(filter.value);
        }
    },
    {
        id: 'Type',
        Header: 'Type',
        headerStyle: { textAlign: 'left' },
        accessor: d => d.type,
        filterMethod: (filter, row) => {
            return row[filter.id].includes(filter.value);
        }
    },
    {
        id: 'Size',
        Header: 'Size',
        headerStyle: {textAlign: 'left'},
        accessor: d => formatBytes(d.size),
        filterMethod: (filter, row) => {
            return getBytesFromFileSizeString(row[filter.id]) > filter.value;
        },
        sortMethod: sortFileSizeStrings
    },
    {
        id: 'Date',
        Header: 'Upload Date',
        headerStyle: { textAlign: 'left' },
        accessor: d => moment.utc(d.updated_at).local().format('YYYY-MM-DD HH:mm:ss'),
        filterMethod: (filter, row) => {
            return row[filter.id].includes(filter.value);
        }
    }
];

const styles = {
    table: {
        marginRight: '64px'
    }
};

const FilesView = (
        { files, selection, selectAll, setRef, toggleSelection, toggleAll, isSelected, bulkDelete, ...otherProps }
    ) => {
    const checkboxProps = {
        selectAll,
        isSelected,
        toggleSelection,
        toggleAll,
        selectType: 'checkbox',
        getTrProps: (s, r) => {
            const selected = typeof r !== 'undefined' && isSelected(r.original._id);
            return {
                style: {
                    backgroundColor: selected ? 'lightgrey' : 'inherit'
                }
            };
        }
    };

    const rows = files.data.map(el => { return { ...el, _id: el.id } });
    const numSelected = selection.length;
    const loading = files.status === Constants.REQUESTING;

    return (
        <div style={styles.table}>
            <BulkFileHandler
                messageLabel = { 'Selected ' + numSelected + ' files' }
                buttonAction = {bulkDelete}
                buttonLabel = 'Delete'
                disabled = { numSelected === 0 }
            />
            <CheckboxTable
                ref = { setRef }
                data ={ rows }
                columns = {[{
                    Header: 'Uploaded Files',
                    columns: columns
                }]}
                loading = { loading }
                filterable
                defaultPageSize = { 10 }
                className = '-striped -highlight'
                { ...checkboxProps }
            />
        </div>
    );
};

export default FilesView;