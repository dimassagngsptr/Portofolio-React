import {
   Button,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FormRegist } from "./FormRegist";

export const CreateAccount = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <Button
            onClick={onOpen}
            px={4}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            _hover={{
               bg: "blue.500",
            }}
            _focus={{
               bg: "blue.500",
            }}>
            Create Account
         </Button>
         <>
            <Modal isOpen={isOpen} onClose={onClose}>
               <ModalOverlay />
               <ModalContent>
                  <ModalHeader></ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                     <FormRegist />
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
      </>
   );
};
