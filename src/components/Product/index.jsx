import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss"
import priceFormatter from "../../utils/priceFormatter";

const Product = ({product, deleteProduct, increase, decrease, changeValue}) => {
    const {img, title, priceTotal, count, id} = product;

    return (
        <section className="product">
                        <div className="product__img">
                            <img src={`./img/products/${img}`} alt={title}/>
                        </div>
                        <div className="product__title">
                            {title}
                        </div>
                            <Count count={count} increase={increase} decrease={decrease} changeValue={changeValue} id={id}/>
                        <div className="product__price">
                            {priceFormatter.format(priceTotal)}
                        </div>
                        <div className="product__controls">
                            <ButtonDelete deleteProduct={deleteProduct} id={id}/>
                        </div>
                    </section>
    );
}
 
export default Product;