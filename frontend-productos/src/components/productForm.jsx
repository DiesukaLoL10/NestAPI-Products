import { useState, useEffect } from 'react';

function ProductForm({ addProduct, updateProduct, productToEdit, clearEdit }) {
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '' });

  useEffect(() => {
    if (productToEdit) setFormData(productToEdit);
    else setFormData({ name: '', description: '', price: '', stock: '' });
  }, [productToEdit]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // CORRECCIÓN DEL PATCH: Extraemos solo los campos permitidos por el DTO
    const payload = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      stock: Number(formData.stock),
      isActive: true
    };
    
    if (productToEdit) updateProduct(productToEdit.id, payload);
    else addProduct(payload);
    
    setFormData({ name: '', description: '', price: '', stock: '' });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-10">
      <h3 className="text-xl font-semibold mb-4 text-slate-700">
        {productToEdit ? 'Editar Producto' : 'Nuevo Producto'}
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <input 
          name="name" placeholder="Nombre" required 
          value={formData.name} onChange={handleChange} 
          className="flex-1 min-w-[150px] p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
        />
        <input 
          name="description" placeholder="Descripción" required 
          value={formData.description} onChange={handleChange} 
          className="flex-[2_1_250px] p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
        />
        <input 
          name="price" type="number" step="0.01" placeholder="Precio" required 
          value={formData.price} onChange={handleChange} 
          className="w-32 p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
        />
        <input 
          name="stock" type="number" placeholder="Stock" required 
          value={formData.stock} onChange={handleChange} 
          className="w-32 p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
        />
        
        <button 
          type="submit" 
          className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${productToEdit ? 'bg-amber-500 hover:bg-amber-600' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {productToEdit ? 'Actualizar' : 'Guardar'}
        </button>
        {productToEdit && (
          <button 
            type="button" 
            onClick={clearEdit} 
            className="px-6 py-3 rounded-lg font-semibold bg-slate-500 hover:bg-slate-600 text-white transition-colors"
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default ProductForm;