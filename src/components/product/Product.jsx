import "./Product.scss";
import ProductIcon1 from "../../img/product_icon1.svg";
import ProductIcon2 from "../../img/product_icon2.svg";
import ProductIcon3 from "../../img/product_icon3.svg";
import ProductIcon4 from "../../img/product_icon4.svg";

function Product() {
  return (
    <>
      <div className="main__product">
        <h2 className="product__title">
          Product was Built Specifically <br /> for You
        </h2>
        <div className="product">
          <div className="container">
            <ul className="product__cards">
              <li className="product__card">
                <img src={ProductIcon1} alt="" />
                <h3 className="product__card_title">First click tests</h3>
                <p className="product__card_text">
                  While most people enjoy casino gambling,
                </p>
              </li>
              <li className="product__card">
                <img src={ProductIcon2} alt="" />
                <h3 className="product__card_title">Design surveys</h3>
                <p className="product__card_text">
                  Sports betting, lottery and bingo playing for the fun
                </p>
              </li>
              <li className="product__card">
                <img src={ProductIcon3} alt="" />
                <h3 className="product__card_title">Preference tests</h3>
                <p className="product__card_text">
                  The Myspace page defines the individual.
                </p>
              </li>
              <li className="product__card">
                <img src={ProductIcon4} alt="" />
                <h3 className="product__card_title">Five second tests</h3>
                <p className="product__card_text">
                  Personal choices and the overall personality of the person.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
