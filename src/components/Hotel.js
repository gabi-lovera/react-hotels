import { Box, Heading, Stack, Image, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import propiedades from "../data/Hoteles";
import { StarIcon } from "@chakra-ui/icons";
import { FavContext } from "../helpers/FavContext";
import IrArriba from "../helpers/IrArriba";
import Estrellas from "./Estrellas";
import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import "./Hotel.css";

export default function Hotel() {
  let { id } = useParams();
  const [hotel, setHotel] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { favoriteState, setFavoriteState } = useContext(FavContext);
  const [, setValor] = useState(0);
  const [agregado, setAgregado] = useState(false);

  const agregarFavoritos = () => {
    var hotelEncontrado = favoriteState.find((item) => item.id === hotel.id);
    if (!hotelEncontrado) {
      setFavoriteState([...favoriteState, hotel]);
      setAgregado(true);
    }
  };

  const removerFavoritos = () => {
    setFavoriteState((oldList) =>
      oldList.filter((item) => item.id !== hotel.id)
    );
    setAgregado(false);
  };

  useEffect(() => {
    var hotelEncontrado = propiedades.find(
      (hotel) => hotel.id === parseInt(id)
    );
    setHotel(hotelEncontrado);

    var seEncuentra = favoriteState.find(
      (item) => item.id === hotelEncontrado.id
    );
    if (seEncuentra) {
      setAgregado(true);
    }
  }, [id, favoriteState]);

  return (
    <Box className="box-home" p="6">
      <Stack>
        <Heading fontSize={"4xl"}>Hotel {hotel.name}</Heading>
      </Stack>
      <Box p="6" className="box-home-in">
        <Image src={hotel.imageUrl} alt={hotel.imageAlt} />
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {hotel.beds} beds &bull; {hotel.baths} baths
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {hotel.title}
        </Box>
        <Box>
          {hotel.formattedPrice}
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
                color={i < hotel.rating ? "black" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {hotel.reviewCount} reviews
          </Box>
        </Box>
        <br />
        {!agregado ? (
          <Button size="lg" colorScheme="blue" onClick={agregarFavoritos}>
            Agregar a favoritos
          </Button>
        ) : (
          <Button size="lg" onClick={removerFavoritos}>
            Remover de favoritos
          </Button>
        )}
        <Button size="lg" className="btn-calificar" onClick={onOpen}>
          Calificar
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {" "}
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  Calificar
                </Text>
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Estrellas setValor={setValor} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose} size="lg">
                Cerrar
              </Button>
              <Button variant="ghost" size="lg" onClick={onClose}>
                Calificar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <IrArriba />
      </Box>
    </Box>
  );
}
