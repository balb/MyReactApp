import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { CategoryNav } from './CategoryNav';

export class Layout extends Component {
    static displayName = Layout.name;

    constructor(props) {
        super(props);
        this.state = { subCategoryId: null };
    }

    render() {
        return (
            <div>
                <NavMenu />
                <Container>
                    <CategoryNav />
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
