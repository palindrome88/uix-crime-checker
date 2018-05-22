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
            isPaneOpenLeft: false,
            locationValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    handleChange(formValue, value) {
        switch(formValue){
            case 'locationValue':
            this.setState({'locationValue': value});
            break;
            // case -- this is where other cases will go for other form values
        }
        
        console.log('locationValue in PC', this.state.locationValue);
      }

    
    submit(event){
        this.props.submit(this.state.locationValue);
        event.preventDefault();
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
                <form onSubmit={this.submit}>
                    {/* <hr></hr>
                    <CollapseExample title="Type of Complaint" form={<ComplaintInput/>}/>
                    <hr></hr>
                    <CollapseExample title="Date of Crime" form={<DateInput/>}/>
                    <hr></hr> */}
                    <CollapseExample value={this.props.value} title="Location" form={<LocationInput handleChange={this.handleChange}/>}/>
                    <hr></hr>
                    <input type="submit" value="Submit" />
                </form>
            </SlidingPane>
        </div>
    );
  }
}

export default Filter;