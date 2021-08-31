import React from "react";
import { Provider } from 'mobx-react';
import Input from "./input";
import Radio from "./radio";
import { MyStore, RepoStore, SetupStore } from "./store";
import { autorun, spy } from "mobx";

const repo = new RepoStore();
const setup = new SetupStore();

autorun(() => {
    repo.data;
    setup.data;
    debugger;
});

spy(event => {
    if (event.type === "action") {
        event;
        debugger;
    }    
});

export default class MobxContainer extends React.Component {

    render() {
        return (
            <Provider repo={repo} setup={setup}>
                <div>
                    <Radio id={"202102250000001"} 
                        sectionId={"202102250000002"}
                        repoId={"202102250000001"} 
                        columnId={"202102250000001"} />
                    <Input id={"202102250000001"} 
                        sectionId={"202102250000002"}
                        repoId={"202102250000001"} 
                        columnId={"202102250000001"} />
                </div>
            </Provider>
        );
    }
}