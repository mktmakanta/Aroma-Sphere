async function ProductsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-3xl">Testing access</div>
      {products.map((product: any) => (
        <div key={product._id} className="border p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm text-gray-500">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
