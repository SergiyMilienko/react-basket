import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss"

const Product = () => {
    return (
        <section className="product">
                        <div className="product__img">
                            <img src="./img/products/macbook.jpg" alt=""/>
                        </div>
                        <div className="product__title">
                            Apple Macbook Air 13
                        </div>
                        <Count/>
                        <div className="product__price">
                            59 999 грн
                        </div>
                        <div className="product__controls">
                            <ButtonDelete/>
                        </div>
                    </section>
    );
}
 
export default Product;