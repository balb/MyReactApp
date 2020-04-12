import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class ProductEdit extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', productNumber: '', color: '', listPrice: '', loading: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="productNumber">ProductNumber</Label>
                    <Input name="productNumber" type="text" value={this.state.productNumber} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="color">Color</Label>
                    <Input name="color" type="text" value={this.state.color} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="listPrice">ListPrice</Label>
                    <Input name="listPrice" type="text" value={this.state.listPrice} onChange={this.handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>;

        return (
            <div>
                {contents}
            </div>
        );
    }
}