import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

export default class MyJqxTreeGrid extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {
            width: '100%'
        }
    }
   
    render() {
        return (
            <JqxTreeGrid 
                width={this.state.width} height={"100%"}
            />
        )
    }
}