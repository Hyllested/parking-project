import React, { Component } from 'react';
import Panel from 'muicss/lib/react/panel';
import './css/header.css';

export class Header extends Component {
    render() {
        return (
            <Panel className="box-header wrapper-header mui--text-headline">
                <div> Parkerings Oversigt</div>
            </Panel>
        );
    }
}