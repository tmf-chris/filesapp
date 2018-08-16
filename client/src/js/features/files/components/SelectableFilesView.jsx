import React, { Component } from 'react';

const makeSelectable = WrappedComponent => {
    class SelectableFilesView extends Component {
        constructor() {
            super();
            this.state = {
                selection: [],
                selectAll: false
            };
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

        clearSelection() {
            this.setState({ selection: [] });
        }

        setRef(v) {
            this.filesView = v;
        }

        toggleAll() {
            const selectAll = this.state.selectAll ? false : true;
            const selection = [];
            if (selectAll) {
                const wrappedInstance = this.filesView.getWrappedInstance();
                const currentRecords = wrappedInstance.getResolvedState().sortedData;
                currentRecords.forEach(item => { selection.push(item._original._id); });
            }
            this.setState({ selectAll, selection });
        }

        isSelected(key) {
            return this.state.selection.includes(key);
        }

        render() {
            const { ...otherProps } = this.props;
            const { selection, selectAll } = this.state;
            return (
                <WrappedComponent
                    selection = { selection }
                    selectAll = { selectAll }
                    clearSelection = { () => this.clearSelection() }
                    toggleSelection = { (k, s, r) => this.toggleSelection(k, s, r) }
                    toggleAll = { () => this.toggleAll() }
                    isSelected = { (k) => this.isSelected(k) }
                    setRef = { (t) => this.setRef(t) }
                    { ...otherProps }
                />
            );
        }

    }

    return SelectableFilesView;
}

export default makeSelectable;

