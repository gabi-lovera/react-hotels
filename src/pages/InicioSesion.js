import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./InicioSesion.css";

export default function InicioSesion() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    if (password !== "" && username !== "") {
      history.push("/");
    }
  };

  return (
    <Box className="box-log" p="6">
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Iniciar Sesión</Heading>
      </Stack>
      <form className="form-log">
        <Box className="box-log-in" p="6">
          <FormControl id="username">
            <FormLabel>
              <span className="required">*</span> Usuario
            </FormLabel>
            <Input
              type="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>
              <span className="required">*</span> Contraseña
            </FormLabel>
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" onClick={iniciarSesion}>
            Ingresar
          </Button>
        </Box>
      </form>
    </Box>
  );
}
