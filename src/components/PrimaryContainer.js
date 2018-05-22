import React, { Component } from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';

// console.log('hi mu mu')

class PrimaryContainer extends Component {
    // console.log('hi mu mu');
    constructor(props) {
        super(props);
        this.state = {
            dataArr: [],
            error: null
        }
        //  this.handleChange = this.handleChange.bind(this);
        //  this.handlesubmitpro = this.handlesubmitpro.bind(this);
    }


                // resolved.map((item, index) => {
                    // objResults.push({
                    //     block: item.block,
                    //     call_received: item.call_received,
                    //     complaint: item.complaint,
                    //     description: item.description,
                    //     disposition_code: item.disposition_code,
                    //     disposition_description: item.disposition_description,
                    //     event_number: item.event_number,
                    //     latitude: item.latitude,
                    //     longitude: item.longitude,
                    //     mapped_location: item.mapped_location,
                    //     rpa: item.rpa,
                    //     sector: item.sector,
                    //     shift: item.shift,
                    //     street_name: item.street_name,
                    //     tencode: item.tencode,
                    //     tencode_suffix: item.tencode_suffix,
                    //     tencode_suffix_description: item.tencode_suffix_description,
                    //     unit_dispatched: item.unit_dispatched,
                    //     zone: item.zone,

        
    componentDidMount() {
        fetch(`https://data.nashville.gov/resource/28i3-48zr.json`, {
            method: "GET",
            data: {
                "$limit": 100,
                "$$app_token": "r1zPUd6qffmC6asW1Y8pPPhuj"
            },
            header: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((results) => {
            console.log("my result", results);
            return results.json();
        }).then((data) => {
            let stuff = Object.values(data);
            console.log ("dan's stuff", stuff);
            this.setState({
                dataArr: stuff
            })

        });
    }

    render() {

        return (
            <div className="App">
                <div className="filter">
                    <Filter />
                </div>
                <div className="map">
                </div>
                <div className="listDiv">
                    {/* {this.state.objResult} */}
                </div>
                <MapContainer />
                <ListData data={this.state.dataArr}/>
                <div className="footerNav">
                    <p>This is the container that will set state for whether to view map or list. </p>
                </div>


            </div>
        );
    }
}


export default PrimaryContainer;
