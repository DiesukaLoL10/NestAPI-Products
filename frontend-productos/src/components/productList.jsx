import ProductItem from './ProductItem';

function ProductList({ products, deleteProduct, setProductToEdit }) {
  if (products.length === 0) {
    return <p className="text-center text-slate-500 py-10">No hay productos en la base de datos.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          deleteProduct={deleteProduct} 
          setProductToEdit={setProductToEdit} 
        />
      ))}
    </div>
  );
}

export default ProductList;