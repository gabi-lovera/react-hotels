import "./Favoritos.css";
import { FavContext } from "../helpers/FavContext";
import { useContext } from "react";
import {
  Flex,
  Circle,
  Box,
  Badge,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

function Favoritos() {
  const { favoriteState, setFavoriteState } = useContext(FavContext);

  const removerFavoritos = (id) => {
    setFavoriteState((oldList) => oldList.filter((hotel) => hotel.id !== id));
  };

  return (
    <Flex p={50} w="full" className="flex-fav">
      {favoriteState.length < 1 ? (
        <Box bg="tomato" w="100%" p={4} color="white">
          Aún no agregó ninguna casa a favoritos
        </Box>
      ) : (
        <>
          {favoriteState.map((hotel) => {
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                className="box-flex"
                position="relative"
              >
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  </Box>
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box
                      fontSize="2xl"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {hotel.name}
                    </Box>
                    <Tooltip
                      label="Remover de favoritos"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a href={"#"} display={"flex"}>
                        <Icon
                          onClick={() => removerFavoritos(hotel.id)}
                          className="icon-remove"
                          as={AiFillDelete}
                          h={7}
                          w={7}
                          alignSelf={"center"}
                        />
                      </chakra.a>
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Estrellas
                      rating={hotel.rating}
                      numReviews={hotel.reviewCount}
                    />
                    <Box fontSize="2xl">
                      <Box as="span" color={"gray.600"} fontSize="lg">
                        ✌️
                      </Box>
                    </Box>
                  </Flex>
                  <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="2xl">
                      <Box as="span" color={"gray.600"} fontSize="lg">
                        £
                      </Box>
                      {hotel.formattedPrice}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </>
      )}
    </Flex>
  );
}

function Estrellas({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default Favoritos;
