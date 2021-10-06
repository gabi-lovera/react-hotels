import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Flex,
  Center,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import "./Footer.css";

export default function Footer() {
  return (
    <Box
      className="box-footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex color="white">
        <Box flex="1">
          <Center>
            <Tooltip
              label="linkedin/in/gabriellovera"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Image
                className="image"
                boxSize="60px"
                src="/images/redes/linkedin.svg"
                alt="Linkedin"
              />
            </Tooltip>
            <a href="https://github.com/Gabsl09/react-hotels">
              <Image
                className="image"
                boxSize="60px"
                src="/images/redes/github.svg"
                alt="GitHub"
              />
            </a>
            <Tooltip
              label="gabrielloveraa@gmail.com"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Image
                className="image"
                boxSize="60px"
                src="/images/redes/email.svg"
                alt="Email"
              />
            </Tooltip>
          </Center>
        </Box>
      </Flex>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack className="stack-copy">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "1xl", sm: "1xl", lg: "1xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Desarrollada por Gabriel Lovera
              </Text>
            </Heading>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
