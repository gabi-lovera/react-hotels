import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  Heading,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FavContext } from "../helpers/FavContext";
import { FaSignOutAlt, FaStar } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { favoriteState } = useContext(FavContext);
  const [cantidadFavoritos, setCantidadFavoritos] = useState(0);

  useEffect(() => {
    setCantidadFavoritos(favoriteState.length);
  }, [setCantidadFavoritos, favoriteState]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
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
              <Link to="/">Hoteles</Link>
            </Text>
          </Heading>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to="/favoritos">
            <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
              <Heading
                className="heading-flex"
                color={"black"}
                fontSize={"2xl"}
              >
                <FaStar className="icon-fav" />
                {cantidadFavoritos > 0 ? (
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    {cantidadFavoritos}
                  </Badge>
                ) : null}
              </Heading>
            </Button>
          </Link>
          <Link to="/sesion">
            <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
              <Heading color={"black"} fontSize={"1xl"}>
                Iniciar Sesión
              </Heading>
            </Button>
          </Link>
          <Link to="/registro">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              size="lg"
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              <FaSignOutAlt />
              &nbsp; Registrarse
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
