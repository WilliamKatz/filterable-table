import React, { Component } from 'react';
import SearchBarSection from './SearchBarSection';
import CheckBox from './CheckBox';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {textInput: 'Search', checkBoxEnabled: true};

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
  }

  handleSearchInput(event) {
    this.setState({textInput: event.target.value});
  }

  handleCheckboxToggle(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : !this.state.checkBoxEnabled
    this.setState({checkBoxEnabled: value});
  }

  render() {
    return (
      <div>
        <SearchBarSection placeholder={this.state.textInput} eventHandler={this.handleSearchInput}/>
        <CheckBox enabled={this.state.checkBoxEnabled} eventHandler={this.handleCheckboxToggle} description={this.props.checkBoxDescription} />
        <ProductTable columnHeaders={this.props.columnHeaders} products={this.props.products} />
      </div>
    );
  }

}

export default FilterableProductTable;