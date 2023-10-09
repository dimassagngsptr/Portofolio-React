import {
   Box,
   Flex,
   Heading,
} from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { CreateAccount } from "./CreateAccount";
import { SignIn } from "./Login";
import { Google } from "./GoogleLogin";
import { Apple } from "./AppleLogin";
export const Home = () => {
   return (
      <Flex
         height="700px"
         justifyContent="space-between"
         alignItems="center"
         padding="5% 15%"
         backgroundColor="gray.900">
         <Heading fontSize="350px" color="white">
            <FaXTwitter />
         </Heading>
         <Box color="white" marginBottom={"100px"}>
            <Heading margin="50px 0" fontSize="65px">
               Happening now
            </Heading>
            <Heading margin="20px 0">Join today.</Heading>
            <Flex flexDirection="column" gap="20px">
               <Google />
               <Apple />
               <Heading fontSize="20px" fontWeight="medium" textAlign="center">
                  or
               </Heading>
               <CreateAccount />
               <Heading
                  fontSize="15px"
                  fontWeight="medium"
                  textAlign="center"
                  padding="5px 0">
                  Already have an account? <SignIn />
               </Heading>
            </Flex>
         </Box>
      </Flex>
   );
};
