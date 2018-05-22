import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Filter.css';
import CollapseExample from './Collapse';
import LocationInput from './Location';
import DateInput from './Date';
import ComplaintInput from './Complaint';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

 
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpenLeft: false
        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
  
  render() {
    return (
         <div ref={ref => this.el = ref}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Click me to open left pane with 20% width!
                </button>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Filter'
                from='left'
                width='85%'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <form onSubmit={this.props.submit}>
                    <hr></hr>
                    <CollapseExample title="Type of Complaint" form={<ComplaintInput/>}/>
                    <hr></hr>
                    <CollapseExample title="Date of Crime" form={<DateInput/>}/>
                    <hr></hr>
                    <CollapseExample value1={this.props.value} Change={this.props.onChange} title="Location" form={<LocationInput/>}/>
                    <hr></hr>
                    <input type="submit" value="Submit" />
                </form>
            </SlidingPane>
        </div>
    );
  }
}

export default Filter;
