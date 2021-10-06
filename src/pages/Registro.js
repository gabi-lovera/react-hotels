import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Box,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";
import "./Registro.css";

export default function Registro() {
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const SignupSchema = yup.object().shape({
    username: yup.string().required("El usuario es requerido"),
    password: yup
      .string()
      .required("La contraseña es requerida")
      .min(3, "La contraseña es demasiada corta"),
    email: yup
      .string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
  });
  return (
    <Box className="box-reg" p="6">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          country: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(data) => {
          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push("/");
        }}
      >
        {({ handleSubmit, errors, touched, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Registrarse</Heading>
            </Stack>
            <Box className="box-reg-in" p="6">
              <Box className="form-reg">
                <FormControl
                  id="username"
                  isValid={touched.username && !errors.username}
                  isInvalid={touched.username && !!errors.username}
                >
                  <FormLabel>
                    <span className="required">*</span> Usuario
                  </FormLabel>
                  <Input
                    name="username"
                    onChange={handleChange}
                    type="username"
                  />
                  <FormErrorMessage type="invalid">
                    {errors.username}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="password"
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                >
                  <FormLabel>
                    <span className="required">*</span> Contraseña
                  </FormLabel>
                  <div className="eye-reg">
                    <Input
                      name="password"
                      onChange={handleChange}
                      type={passwordShown ? "text" : "password"}
                    />
                    <div className="mg-eye">
                      {passwordShown ? (
                        <BsFillEyeFill
                          className="icon-pass"
                          onClick={togglePasswordVisiblity}
                        />
                      ) : (
                        <BsFillEyeSlashFill
                          className="icon-pass"
                          onClick={togglePasswordVisiblity}
                        />
                      )}
                    </div>
                  </div>
                  <FormErrorMessage type="invalid">
                    {errors.password}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="email"
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                >
                  <FormLabel>
                    <span className="required">*</span> Correo
                  </FormLabel>
                  <Input name="email" onChange={handleChange} type="emaill" />

                  <FormHelperText>No se compartirá el correo</FormHelperText>
                  <FormErrorMessage type="invalid">
                    {errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="country">
                  <FormLabel>País</FormLabel>
                  <Select name="country" onChange={handleChange}>
                    <option>Argentina</option>
                    <option>Chile</option>
                    <option>Uruguay</option>
                  </Select>
                </FormControl>

                <FormControl className="buttom-reg">
                  <Button
                    type="submit"
                    display={{ base: "none", md: "inline-flex" }}
                    color={"white"}
                    bg={"pink.400"}
                    size="lg"
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Registrarse
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
