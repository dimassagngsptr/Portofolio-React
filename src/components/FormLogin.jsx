import {
   Button,
   Box,
   Flex,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   Stack,
   Heading,
   InputRightElement,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/regist";
import { useNavigate } from "react-router-dom";

const registSchema = Yup.object().shape({
   email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
   password: Yup.string()
      .min(3, "Password must be at least 3 characters at minimum")
      .required("Password is required"),
});
export const FormLogin = () => {
   const [showPassword, setShowPassword] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSubmit = async (data) => {
      try {
         const response = await axios.get(
            `http://localhost:2000/users?email=${data.email}&password=${data.password}`
         );
         if (response.data[0]?.id) {
            dispatch(setData(response.data[0]));
            localStorage.setItem("id", response.data[0]?.id);
            navigate("/Dashboard");
            window.location.reload();
         } else {
          alert("Invalid request");
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Box>
         <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={registSchema}
            onSubmit={(values, action) => {
               handleSubmit(values);
               action.resetForm();
            }}>
            {(props) => {
               return (
                  <Flex
                     width={"100%"}
                     align={"center"}
                     justify={"center"}
                     height={"100%"}>
                     <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                           <Heading fontSize={"4xl"}>
                              Login Your Account
                           </Heading>
                        </Stack>
                        <Form>
                           <Box rounded={"lg"} p={2} width={"400px"}>
                              <Stack spacing={4} width={"100%"}>
                                 <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                       as={Field}
                                       type="text"
                                       name="email"
                                       placeholder="Input email"
                                       autoComplete="off"
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="email"
                                       style={{ color: "red" }}
                                    />
                                    {/* <Input type="email" /> */}
                                 </FormControl>
                                 <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                       <Input
                                          as={Field}
                                          type={
                                             showPassword ? "text" : "password"
                                          }
                                          name="password"
                                          placeholder="Input Password"
                                          autoComplete="off"
                                       />
                                       <ErrorMessage
                                          component="div"
                                          name="password"
                                          style={{ color: "red" }}
                                       />
                                       {/* <Input
                                       type={showPassword ? "text" : "password"}
                                    /> */}
                                       <InputRightElement h={"full"}>
                                          <Button
                                             variant={"ghost"}
                                             onClick={() =>
                                                setShowPassword(
                                                   (showPassword) =>
                                                      !showPassword
                                                )
                                             }>
                                             {showPassword ? (
                                                <ViewIcon />
                                             ) : (
                                                <ViewOffIcon />
                                             )}
                                          </Button>
                                       </InputRightElement>
                                    </InputGroup>
                                 </FormControl>
                                 <Stack spacing={10}>
                                    <Button
                                       type="submit"
                                       bg={"black"}
                                       color={"blue.400"}
                                       _hover={{
                                          bg: "black",
                                       }}>
                                       Login
                                    </Button>
                                 </Stack>
                              </Stack>
                           </Box>
                        </Form>
                     </Stack>
                  </Flex>
               );
            }}
         </Formik>
      </Box>
   );
};
