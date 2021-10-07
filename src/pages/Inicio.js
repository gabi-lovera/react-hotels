import {
  Box,
  Image,
  Badge,
  Grid,
  Heading,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import IrArriba from "../helpers/IrArriba";
import propiedades from "../data/Hoteles";
import { FavContext } from "../helpers/FavContext";
import { useContext, useState, useEffect } from "react";
import "./Inicio.css";

export default function Inicio() {
  const history = useHistory();
  const { favoriteState, setFavoriteState } = useContext(FavContext);
  const [loaded, setLoaded] = useState(false);

  const agregarFavoritos = (hotel) => {
    var hotelEncontrado = favoriteState.find((item) => item.id === hotel.id);
    if (!hotelEncontrado) {
      setFavoriteState([...favoriteState, hotel]);
    }
  };

  const verHotel = (id) => {
    history.push(`hotel/${id}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <Box className="box-home" p="6">
      <Stack>
        <Heading fontSize={"4xl"}>Lugares disponibles</Heading>
      </Stack>
      <Box className="box-home-in" p="6">
        <Grid templateColumns="repeat(3, 3fr)" gap={6}>
          {propiedades.map((propiedad) => {
            return (
              <Box
                className="box-card"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                position="relative"
              >
                <StarIcon
                  onClick={() => agregarFavoritos(propiedad)}
                  size="40px"
                  position="absolute"
                  top={2}
                  right={2}
                  color={"gray.200"}
                  className="staricon-card"
                />
                {loaded ? null : (
                  <div
                    className="div-spinner"
                    style={{
                      background: "#edf2f7",
                      height: "400px",
                      width: "100%",
                    }}
                  >
                    <Spinner className="spinner" color="red.500" size="xl" />
                  </div>
                )}
                <Image
                  style={loaded ? {} : { display: "none" }}
                  src={propiedad.imageUrl}
                  alt={propiedad.imageAlt}
                />
                <Box
                  p="6"
                  onClick={() => {
                    verHotel(propiedad.id);
                  }}
                >
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2">
                      Nuevo
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {propiedad.beds} beds &bull; {propiedad.baths} baths
                    </Box>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {propiedad.title}
                  </Box>
                  <Box>
                    {propiedad.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / wk
                    </Box>
                  </Box>
                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={
                            i < propiedad.rating ? "yellow.500" : "gray.300"
                          }
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {propiedad.reviewCount} reviews
                    </Box>{" "}
                    &nbsp;&nbsp;&nbsp;
                    <Box
                      className="box-text"
                      as="span"
                      ml="2"
                      color="blue.600"
                      fontSize="sm"
                    >
                      Ver más detalles
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
        <IrArriba />
      </Box>
    </Box>
  );
}
