import React, { Component } from 'react';

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
            : <p><em>NOT Loading...</em></p>;

        return (
            <div>
                {contents}
            </div>
        );
    }
}