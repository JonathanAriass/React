import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Product Page!</h1>
      <ul>
        <li>
          <Link to="/product/p1">A book</Link>
        </li>
        <li>
          <Link to="/product/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/product/p3">A pencil</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
