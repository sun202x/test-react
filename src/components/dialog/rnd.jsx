import React from "react";
import { Rnd } from "react-rnd";

export default class MyRnd extends React.Component {

    render() {
        const style = {
            // justifyContent: "center",
            border: "1px solid #ccc",
            // background: "#f0f0f0"
        };

        const headerStyle = {
            position: 'relative',
            height: '31px',
            border: '0px',
            backgroundColor: '#005B9E',
            borderColor: '#005B9E',
            color: 'white'
        };

        const bodyStyle = {
            position: 'relative',
            height: '169px',
            cursor: 'auto'
        };

        return (
            <Rnd
                style={style}
                default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200
                }}
                cancel='#body'
            >
                <div style={headerStyle}>title</div>
                <div id="body" className={'cancel'} style={bodyStyle}>body</div>
            </Rnd>
        );
    }
}