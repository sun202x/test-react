import React from "react";
import { inject, observer } from "mobx-react";

@inject("repo")
@inject("setup")
@observer
class Radio extends React.Component {

    state = {
        value: "0"
    };

    items = ["검색형", "라디오버튼", "레이어"];

    handleChange = e => {
        const { repo, setup } = this.props;
        const value = e.target.value;

        setup.changeAttrs(
            this.props.sectionId,
            this.props.id,
            "widgetType",
            value
        );

        repo.changeAttrs(
            this.props.repoId,
            this.props.columnId,
            "notNull",
            (value == 0)
        );

        this.setState({ value });
    }

    render() {
        return (
            <React.Fragment>
                {this.items.map((item, index) => (
                    <div key={item}>
                        <input type="radio" 
                            id={item} 
                            name="drone" 
                            value={index} 
                            checked={this.state.value == index} 
                            onChange={this.handleChange}
                            />
                        <label htmlFor={item}>{item}</label>
                    </div>
                ))}
            </React.Fragment>
        );
    }

}

export default Radio;