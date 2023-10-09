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

const registSchema = Yup.object().shape({
   name: Yup.string(),
   email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
   password: Yup.string()
      .min(3, "Password must be at least 3 characters at minimum")
      .required("Password is required"),
});
export const FormRegist = () => {
   const [showPassword, setShowPassword] = useState(false);
   const handleSubmit = async (data) => {
      try {
         const response = await axios.post("http://localhost:2000/users", data);
         console.log(response);
      } catch (error) {
         console.log(error);
      }
      alert("Success create account")
      window.location.reload();
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
                              Create Your Account
                           </Heading>
                        </Stack>
                        <Form>
                           <Box rounded={"lg"} p={2} width={"400px"}>
                              <Stack spacing={4} width={"100%"}>
                                 <FormControl id="name">
                                    <FormLabel>Name</FormLabel>
                                    {/* <Input type="text" /> */}
                                    <Input
                                       as={Field}
                                       type="text"
                                       name="name"
                                       placeholder="Input Name"
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="name"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                                 <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                       as={Field}
                                       type="text"
                                       name="email"
                                       placeholder="Input email"
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
                                       Sign in
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
