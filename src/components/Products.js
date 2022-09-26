import React from "react";
import { useSelector } from "react-redux";

const initialProducts = [
  { name: "eggs", cost: 2.99 },
  { name: "pants", cost: 9.99 },
  { name: "paper plates", cost: 5.99 }
];

export const Products = () => {
  const [products] = React.useState(initialProducts);

  const filterBy = useSelector((state) => state.productFilter.filter);

  return (
    <div>
      {products
        .filter((product) =>
          filterBy ? product.name.includes(filterBy) : true
        )
        .map((product) => (
          <div key={product.name}>
            {product.name} @ {product.cost}
          </div>
        ))}
    </div>
  );
};
export default Products;
