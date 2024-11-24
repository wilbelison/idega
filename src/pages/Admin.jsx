import { NavLink } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartView from "../components/CartView";

import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main className="Admin">
        <h1 className="title">Gerenciar loja</h1>
        <ul className="menu">
          <li><NavLink to={`/admin/products`} activeclassname="active">Produtos</NavLink></li>
          <li><NavLink to={`/admin/categories`} activeclassname="active">Categorias</NavLink></li>
          <li><NavLink to={`/admin/brands`} activeclassname="active">Marcas</NavLink></li>
        </ul>
        <h2>Adicionar produto</h2>
        <h2>Lista de produtos</h2>
        <table>
          <thead>
            <th>ID</th>
            <th>Título</th>
          </thead>
          <tr>
            <td>1</td>
            <td>Teste</td>
          </tr>
        </table>
      </main>
      <Footer />
      <CartView />
    </>
  );
};

export default Admin;
