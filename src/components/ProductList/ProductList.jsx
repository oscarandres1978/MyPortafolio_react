import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portafolio OAL web</h1>
        <p className="pl-desc">
        OAL web es un portafolio que he ido construyendo a base de estudio y dedicación 
        con la cual quiero profesionalizarme para brindar mis conocimientos en el desarrollo web.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} titulo={item.titulo} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;