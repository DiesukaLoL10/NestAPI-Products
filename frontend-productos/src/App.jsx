import { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const addProduct = async (productData) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    fetchProducts();
  };

  const updateProduct = async (id, productData) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    setProductToEdit(null);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Catálogo de Productos</h1>
      
      <ProductForm 
        addProduct={addProduct} 
        updateProduct={updateProduct} 
        productToEdit={productToEdit} 
        clearEdit={() => setProductToEdit(null)}
      />
      
      <ProductList 
        products={products} 
        deleteProduct={deleteProduct} 
        setProductToEdit={setProductToEdit} 
      />
    </div>
  );
}

export default App;