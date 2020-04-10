import React, { Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export class CategoryNav extends Component {
    static displayName = CategoryNav.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

    static renderForecastsTable(forecasts) {

        //const [dropdownOpen, setDropdownOpen] = useState(false);

        const toggle = () => alert("Boom");

      return (
          <div>
              <Nav tabs>
                  <NavItem>
                      <NavLink href="#" active>Link</NavLink>
                  </NavItem>
                  <Dropdown nav isOpen={true} toggle={toggle}>
                      <DropdownToggle nav caret>
                          Dropdown
          </DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                  <NavItem>
                      <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="#">Another Link</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                  </NavItem>
              </Nav>
          </div>
      );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : CategoryNav.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
