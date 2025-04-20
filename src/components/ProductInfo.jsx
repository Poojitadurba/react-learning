const ProductInfo = () => {
  const product = [
    {
      name: "Laptop",
      price: "$1200",
      availability: "In Stock",
      description: "A high-performance laptop for all your needs.",
    },
  ];
  return (
    <div>
      {product.map(({ name, price, availability, description }) => (
        <ul key={Math.random()}>
          <li>{name}</li>
          <li>{price}</li>
          <li>{availability}</li>
          <li>{description}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductInfo;
