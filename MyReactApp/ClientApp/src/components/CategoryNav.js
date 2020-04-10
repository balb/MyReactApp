import React, { Component } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

class CategoryDropdown extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleIsOpen = this.toggleIsOpen.bind(this);
    }

    toggleIsOpen() {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    }

    render() {
        return (<Dropdown nav isOpen={this.state.isOpen} toggle={this.toggleIsOpen}>
            <DropdownToggle nav caret>
                {this.props.name}
            </DropdownToggle>
            <DropdownMenu>
                {this.props.subCategories.map(subCategory =>
                    <DropdownItem onClick={() => alert(subCategory.id)}>{subCategory.name}</DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>)
    };
}


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
            <div>
                <Nav tabs>
                    {categories.map(category =>
                        <CategoryDropdown {...category} />
                    )}
                </Nav>
            </div>
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
