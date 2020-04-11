import React, { Component } from 'react';
import { Table } from 'reactstrap';

export function ProductList(props) {
    return (<ProductListTable productSubcategoryId={props.match.params.id} />)
}

class ProductListTable extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProducts();
    }

    componentDidUpdate(prevProps) {
        if (this.props.productSubcategoryId !== prevProps.productSubcategoryId) {
            this.populateProducts();
        }
    }

    async populateProducts() {
        const response = await fetch('api/Product?productSubcategoryId=' + this.props.productSubcategoryId);
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <Table striped={true}>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Product Number</th>
                        <th>Color</th>
                        <th>List Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(product => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.productNumber}</td>
                            <td>{product.color}</td>
                            <td>{product.listPrice}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>;

        return (
            <div>
                {contents}
            </div>
        );
    }
}