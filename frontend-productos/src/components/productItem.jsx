function ProductItem({ product, deleteProduct, setProductToEdit }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{product.name}</h3>
      <p className="text-slate-500 text-sm mb-4 flex-grow">{product.description}</p>
      <p className="text-2xl font-bold text-blue-600 mb-1">${product.price}</p>
      <p className="text-sm text-slate-500 mb-6">Stock disponible: {product.stock}</p>
      
      <div className="flex gap-3 mt-auto">
        <button 
          onClick={() => setProductToEdit(product)} 
          className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
        >
          Editar
        </button>
        <button 
          onClick={() => deleteProduct(product.id)} 
          className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductItem;