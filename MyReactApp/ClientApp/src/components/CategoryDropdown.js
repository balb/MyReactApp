import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

export class CategoryDropdown extends Component {

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
                    <DropdownItem key={subCategory.id}>
                        <Link to={{ pathname: '/products/' + subCategory.id }}>{subCategory.name}</Link>
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>)
    };
}
