import React, { Component } from 'react';
import { TreeTable, TreeState } from 'cp-react-tree-table';
import { generateData } from './mock-data-gen';
import './table.css';

const MOCK_DATA = generateData();
debugger;

export default class CpReactTreeTable extends Component {

    state = {
        treeValue: TreeState.create(MOCK_DATA.data)
    };

    treeTableRef = React.createRef();

    render() {
        const { treeValue } = this.state;

        return (
            <TreeTable className="demo-tree-table"
                height="360"
                headerHeight="32"

                value={treeValue}
                onChange={this.handleOnChange}

                ref={this.treeTableRef}
                onScroll={this.handleOnScroll}>
                <TreeTable.Column renderCell={this.renderIndexCell} renderHeaderCell={this.renderHeaderCell('Name')} basis="180px" grow="0" />
                <TreeTable.Column renderCell={this.renderEditableCell} renderHeaderCell={this.renderHeaderCell('Contact person')} />
                <TreeTable.Column renderCell={this.renderEmployeesCell} renderHeaderCell={this.renderHeaderCell('Employees', false)} />
                <TreeTable.Column renderCell={this.renderExpensesCell} renderHeaderCell={this.renderHeaderCell('Expenses ($)', false)} />
            </TreeTable>
        );
    }

    handleOnChange = (newValue) => {
        console.log('newValue', newValue)
        this.setState({ treeValue: newValue });
    }

    handleOnScroll = (newValue) => {
        console.log('onScroll', newValue)
    }

    renderHeaderCell = (name, alignLeft = true) => {
        return () => {
            return (
                <span className={alignLeft ? 'align-left' : 'align-right'}>{name}</span>
            );
        }
    }

    renderIndexCell = (row) => {
        return (
            <div style={{ paddingLeft: (row.metadata.depth * 15) + 'px' }}>
                <button className={`toggle-button ${row.$state.isExpanded ? 'expanded' : ''}`}
                    onClick={row.toggleChildren}
                    disabled={!row.metadata.hasChildren}>
                    <span className={row.data.isWaldo ? 'is-waldo' : ''}>{row.data.name}</span>
                </button>
            </div>
        );
    }

    renderEmployeesCell = (row) => {
        return (
            <span className="employees-cell">{row.data.employees}</span>
        );
    }

    renderExpensesCell = (row) => {
        return (
            <span className="expenses-cell">{row.data.expenses}</span>
        );
    }

    renderEditableCell = (row) => {
        return (
            <input type="text" value={row.data.contact}
                onChange={(event) => {
                    row.updateData({
                        ...row.data,
                        contact: event.target.value,
                    });
                }} />
        );
    }

}