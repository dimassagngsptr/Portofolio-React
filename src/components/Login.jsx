import {
   Button,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FormLogin } from "./FormLogin";
export const SignIn = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
      <>
         <Button
            onClick={onOpen}
            fontWeight="bold"
            borderColor="whiteAlpha.400"
            px={2}
            py={0}
            fontSize={"sm"}
            rounded={"full"}
            bg={"transparent"}
            color={"blue.500"}
            _hover={{
               bg: "black",
            }}
            _focus={{
               bg: "black",
            }}>
            Login
         </Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader></ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <FormLogin />
               </ModalBody>

               {/* <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                     Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
               </ModalFooter> */}
            </ModalContent>
         </Modal>
      </>
   );
};
