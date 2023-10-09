import {
   Button,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   ModalFooter,
   Flex,
   Text,
} from "@chakra-ui/react";
import { GrApple } from "react-icons/gr";
import { useDisclosure } from "@chakra-ui/react";
export const Apple = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
      <>
         <Button
         onClick={onOpen}
            px={20}
            fontSize={"sm"}
            rounded={"full"}
            bg={"black"}
            color={"white"}
            _hover={{
               bg: "black",
               color: "white",
            }}
            border="0.5px solid"
            borderColor="whiteAlpha.400">
            <Flex gap="10px" alignItems="center" textAlign="center">
               <GrApple />{" "}
               <Text color="white" fontWeight="bold">
                  Sign up with Apple
               </Text>
            </Flex>
         </Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Sign In</ModalHeader>
               <ModalCloseButton />
               <ModalBody>Ini modal</ModalBody>

               <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                     Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
};
