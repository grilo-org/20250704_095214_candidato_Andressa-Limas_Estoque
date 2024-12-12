import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import ProductForm from './components/Products/ProductForm';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Sistema de Gestão de Estoque</h1>
        <Login />
        <Register />
        <ProductList />
        <ProductForm />
      </div>
    </AuthProvider>
  );
};

export default App;
