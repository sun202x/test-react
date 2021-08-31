import { reaction } from "mobx";
import { disposeOnUnmount, inject, observer } from "mobx-react";
import React from "react";

@inject("repo")
@inject("setup")
@observer
export default class Input extends React.Component {

    state = {
        value: ''
    };

    // 양식
    @disposeOnUnmount
    inputUnmount = reaction(
        () => (
            this.props.setup.getAttrs(
                `/${this.props.sectionId}/${this.props.id}/widgetType`
            )
        ),
        (value, previousValue, reaction) => {
            this.setState({ value });
        }
    );

    // Repo
    @disposeOnUnmount
    inputUnmount = reaction(
        () => (
            this.props.repo.getAttrs(
                `/${this.props.repoId}/${this.props.columnId}/notNull`
            )
        ),
        (value, previousValue, reaction) => {
            // debugger;
        }
    );

    handleChange = e => {
        // this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}