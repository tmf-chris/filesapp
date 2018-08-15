import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Radium from 'radium';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { withStyles } from '@material-ui/core/styles';
import { getFiles } from '../duck';

const filesConnector = WrappedComponent => {
    class FilesConnector extends React.Component {
        constructor() {
            super();
            this.state = {
                selection: [],
                selectAll: false
            };
        }

        componentWillMount() {
            const { getFiles } = this.props;
            getFiles();
        }

        toggleSelection(key, shift, row) {
            let selection = [ ...this.state.selection ];
            const keyIndex = selection.indexOf(key);
            if (keyIndex >= 0) {
                selection = [ ...selection.slice(0, keyIndex), ...selection.slice(keyIndex + 1) ];
            } else {
                selection.push(key);
            }
            this.setState({ selection });
        }

        setRef(table) {
            this.checkboxTable = table;
        }

        toggleAll() {
            const selectAll = this.state.selectAll ? false : true;
            const selection = [];
            if (selectAll) {
                const wrappedInstance = this.checkboxTable.getWrappedInstance();
                const currentRecords = wrappedInstance.getResolvedState().sortedData;
                currentRecords.forEach(item => { selection.push(item._original._id); });
            }
            this.setState({ selectAll, selection });
        }

        isSelected(key) {
            return this.state.selection.includes(key);
        };

        render() {
            const { files, ...otherProps } = this.props;
            files.data = files.data.map(el => { return { ...el, _id: el.id } });
            const { selection, selectAll } = this.state;
            return (
                <WrappedComponent
                    files = { files }
                    selection = { selection }
                    selectAll = { selectAll }
                    toggleSelection = { (k, s, r) => this.toggleSelection(k, s, r) }
                    toggleAll = { () => this.toggleAll() }
                    isSelected = { (k) => this.isSelected(k) }
                    setRef = { (t) => this.setRef(t) }
                    { ...otherProps }
                />
            );
        }
    }

    FilesConnector = muiThemeable()(Radium(FilesConnector));
    return connect(
        state => { return { files: state.files } },
        dispatch => bindActionCreators({getFiles}, dispatch)
    )(FilesConnector);
}

export default filesConnector;