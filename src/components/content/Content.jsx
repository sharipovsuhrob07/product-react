import "./Content.scss";
import ContentCard1 from "../../img/content_card1.svg";

function Content() {
  return (
    <>
      <div className="contents">
        <div className="container">
          <h2 className="content__title">Contents Strategies</h2>
          <p className="content__text">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <ul className="content__cards_list">
            <li className="content__cards_item">
              <img src={ContentCard1} alt="img" />
              <p className="content__card_item_paragraph">
                By Wahid Ari | 03 March 2019
              </p>
              <p className="content__card_item_text">Increasing Prosperity <br /> With Positive Thinking</p>
            </li>
            <li className="content__cards_item">
              <img src={ContentCard1} alt="img" />
              <p className="content__card_item_paragraph">
                By Wahid Ari | 03 March 2019
              </p>
              <p className="content__card_item_text">Increasing Prosperity <br /> With Positive Thinking</p>
            </li>
            <li className="content__cards_item">
              <img src={ContentCard1} alt="img" />
              <p className="content__card_item_paragraph">
                By Wahid Ari | 03 March 2019
              </p>
              <p className="content__card_item_text">Increasing Prosperity <br /> With Positive Thinking</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Content;
