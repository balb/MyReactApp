import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class ProductEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', productNumber: '', color: '', listPrice: '', loading: true, errors: {} };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.populateProduct();
    }

    //componentDidUpdate(prevProps) {
    //    if (this.props.productSubcategoryId !== prevProps.productSubcategoryId) {
    //        this.populateProducts();
    //    }
    //}

    async populateProduct() {
        const response = await fetch('api/Product?productId=' + this.props.match.params.id);
        const data = await response.json();
        this.setState({ ...data, loading: false });
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if (name === "listPrice") value = Number(value);
        this.setState({ [name]: value });
    }

    handleSubmit(event) {

        (async () => {
            var json = JSON.stringify(this.state);
            const response = await fetch('api/Product?productId=' + this.props.match.params.id, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: json
            });


            if (response.status === 400) {
                const errorsJson = await response.json();
                this.setState({ errors: errorsJson });
            } else {
                this.setState({ errors: {} });
            }

        })();        

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
                    <Input name="color" type="text" value={this.state.color ?? ''} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="listPrice">ListPrice</Label>
                    <Input name="listPrice" type="text" value={this.state.listPrice} onChange={this.handleChange} />
                    <ErrorMessage name="ListPrice" errors={this.state.errors} />
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

function ErrorMessage(props) {
    const errors = props.errors;
    if (!errors[props.name]) return null;
    return (<div>{errors[props.name][0]}</div>);
}