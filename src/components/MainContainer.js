import React, { Component } from 'react';

import { DataList } from "./DataList";
import { ParkingCount } from "./ParkingCount";
import { ProviderCounts } from "./ProviderCounts";
import { ProviderSelector } from "./ProviderSelector";
import Panel from 'muicss/lib/react/panel';

import './css/container.css';

export class MainContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            parkingData: {
                results: null,
                parkingCountPerProvider: null
            },
            parkingFilter: null
        };
        this.handleProviderSelected = this.handleProviderSelected.bind(this);
    }

    componentDidMount() {
        var now = new Date();
        // fetch('http://data.kk.dk/parking/' + now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate() + '/' + now.getHours() + ':' + now.getMinutes())
        fetch('http://data.kk.dk/parking/latest/100')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ parkingData: json, parkingCountPerProvider: this.getCountPerProvider(json) })
                console.log(this.state.parkingData)
            })
            .catch((err) => {
                console.log("Can't fetch data: ", err);
            })
    }

    getCountPerProvider(parkingData) {
        var parkingCountPerProvider = [];
        var parkingCountPerProviderMap = {};
        parkingData.results.forEach(function (element) {
            if (parkingCountPerProviderMap[element.providerId]) {
                parkingCountPerProviderMap[element.providerId].count++;
            } else {
                parkingCountPerProviderMap[element.providerId] = {
                    providerId: element.providerId,
                    count: 1
                };
            }
        }, this);

        parkingCountPerProvider = Object.keys(parkingCountPerProviderMap).map(function (key) { return parkingCountPerProviderMap[key] });
        return parkingCountPerProvider;
    }

    handleProviderSelected(provider) {
        this.setState({
            parkingFilter: provider
        });
    }

    render() {
        if (this.state.parkingData.results) {
            return (
                <div className="wrapper box">
                    <div/>
                    <Panel>
                    <ParkingCount count={this.state.parkingData.results.length} textLabel={"Parkeringer i den sidste time: "} />
                    <ProviderCounts parkingCountPerProvider={this.state.parkingCountPerProvider} />
                    </Panel>
                    <div/>
                    <div/>
                    <Panel>
                    <ProviderSelector parkingCountPerProvider={this.state.parkingCountPerProvider} providerSelected={this.handleProviderSelected} />
                    <DataList parkingData={this.state.parkingData} parkingFilter={this.state.parkingFilter} />
                    </Panel>
                </div>
            );
        } else {
            return (
                <div>No data available!</div>
            )
        }
    }


}