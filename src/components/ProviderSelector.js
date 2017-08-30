import React, { Component } from 'react';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import './css/provider-selector.css';

export class ProviderSelector extends Component {
    constructor(props) {
        super();
        // Set up state object
        this.state = {
            parkingCountPerProvider: props.parkingCountPerProvider
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.providerSelected(event.target.value);
    }

    render() {
        return (
            <div >
                <div className="mui--text-title title-text">Oversigt over parkinger</div>
                <div className="mui--text-subhead">Vælg udbyder:</div>

                <div>
                    <Select onChange={(event) => this.handleChange(event)} >
                        <Option value={undefined} label="Ingen filter"></Option>
                        {this.state.parkingCountPerProvider.map((provider, i) => (
                            <Option key={i} value={provider.providerId} label={provider.providerId} ></Option>
                        ))}
                    </Select>
                </div>
            </div>
        );
    }
}

ProviderSelector.propTypes = {
    parkingCountPerProvider: React.PropTypes.array,
    providerSelected: React.PropTypes.func
};