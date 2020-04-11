import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { CategoryNav } from './CategoryNav';

export class Layout extends Component {
    static displayName = Layout.name;

    constructor(props) {
        super(props);
        this.state = { subCategoryId: null };
        this.updateSubCategory = this.updateSubCategory.bind(this);
    }

    updateSubCategory(subCategoryId) {
        this.setState({ subCategoryId: subCategoryId });
    }

    render() {
        return (
            <div>
                <NavMenu />
                <CategoryNav onUpdateSubCategory={this.updateSubCategory} />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
