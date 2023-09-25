import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  //   console.log(card);

  const { id,title, image, bg_color, button_color, text_color, button_text } =
    card;

  // console.log(button_color)
  return (
    <Link to={`/details/${id}`}>
      <div>
        {
          <div
            style={{ background: `${bg_color}` }}
            className={`flex w-auto mx-3 max-h-72 flex-col rounded-xl mt-6  text-gray-700 shadow-md `}
          >
            <div
              className={`relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none`}
            >
              <img
                className={`h-[194px] w-full rounded-lg`}
                src={image}
                alt="ui/ux review check"
              />
            </div>
            <button
              style={{
                background: `${button_color}`,
                color: `${text_color}`,
              }}
              className={` rounded-lg w-max mt-4 ml-4 px-4 py-3`}
            >
              {button_text}
            </button>
            <div className="pt-2 pb-4 pl-4">
              <h4
                style={{ color: `${text_color}` }}
                className="block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased"
              >
                {title}
              </h4>
            </div>
          </div>
        }
      </div>
    </Link>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Card;
