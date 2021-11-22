import "./product.css";

const Product = ({img,link,titulo}) => {
  return (
    <div className="p">
        <h4 className="p-ti">{titulo}</h4>
        
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;