import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import "./Estrellas.css";

const Calificacion = ({ setValor }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState();

  const puntuar = (ratingValue) => {
    setRating(ratingValue);
    setValor(ratingValue);
  };

  return (
    <div className="div-score">
      <div className="div-star">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                className="inputStar"
                value={ratingValue}
                onClick={() => puntuar(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "ffc107" : "e4e5e9"}
                size={60}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      {rating > 0 ? (
        <>
          <br />
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Puntuar con {rating} estrellas
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default Calificacion;
