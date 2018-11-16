import React from 'react';
import TableHeader from './TableHeader';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <TableHeader headers={props.columnHeaders} />
      <ProductCategory category={props.products[0].category} />
      <ProductRow name={props.products[0].name} price={props.products[0].price} />
      <ProductRow name={props.products[1].name} price={props.products[1].price} />
      <ProductRow name={props.products[2].name} price={props.products[2].price} />
      <ProductCategory category={props.products[3].category} />
      <ProductRow name={props.products[3].name} price={props.products[3].price} />
      <ProductRow name={props.products[4].name} price={props.products[4].price} />
      <ProductRow name={props.products[5].name} price={props.products[5].price} />
    </div>
  );
}

export default ProductTable;
