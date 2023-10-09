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
   Text
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useDisclosure } from "@chakra-ui/react";
export const Google = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
      <>
         <Button
         onClick={onOpen}
            px={20}
            fontSize={"sm"}
            rounded={"full"}
            bg={"white"}
            color={"black"}>
            <Flex gap="10px" alignItems="center" textAlign="center">
               <FcGoogle /> <Text color="gray.600">Sign up with Google</Text>
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
