import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { CategoryDropdown } from './CategoryDropdown';

export class CategoryNav extends Component {
    constructor(props) {
        super(props);
        this.state = { categories: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderCategoryNav(categories) {
        return (
            <Nav tabs>
                {
                    categories.map(category =>
                        <CategoryDropdown key={category.id} {...category} />
                    )}
            </Nav>
        );
    }

    render() {
        return (
            this.state.loading
                ? <p><em>Loading...</em></p>
                : CategoryNav.renderCategoryNav(this.state.categories)
        );
    }

    async populateWeatherData() {
        const response = await fetch('api/Category');
        const data = await response.json();
        this.setState({ categories: data, loading: false });
    }
}
