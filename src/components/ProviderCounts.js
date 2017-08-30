import React, { Component } from 'react';
import './css/data-list.css';

export class ProviderCounts extends Component {
    constructor(props) {
        super();
        // Set up state object
        this.state = {
            parkingCountPerProvider: props.parkingCountPerProvider
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.parkingCountPerProvider.map((provider, i) => (
                        <li className="mui--text-subhead list-items" key={i}>{provider.providerId}: {provider.count} parkeringer </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ProviderCounts.propTypes = {
    parkingCountPerProvider: React.PropTypes.array
};