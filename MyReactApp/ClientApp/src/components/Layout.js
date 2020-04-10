import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { CategoryNav } from './CategoryNav';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
            <NavMenu />
            <CategoryNav />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
