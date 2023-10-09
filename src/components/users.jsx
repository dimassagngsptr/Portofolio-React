"use client";

import {
   Heading,
   Avatar,
   Box,
   Center,
   Image,
   Flex,
   Text,
   Stack,
   Button,
   useColorModeValue,
} from "@chakra-ui/react";

export default function Users() {
   return (
      <Box py={2}>
         <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            rounded={"md"}
            overflow={"hidden"}>
            <Flex justify={"center"} mt={-12}>
            </Flex>

            <Box px="!00%">
               <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                     fontSize={"2xl"}
                     fontWeight={500}
                     fontFamily={"body"}>
                     John Doe
                  </Heading>
                  <Text color={"gray.500"}>Frontend Developer</Text>
               </Stack>

               <Stack direction={"row"} justify={"center"} spacing={6}>
                  <Stack spacing={0} align={"center"}>
                     <Text fontWeight={600}>23k</Text>
                     <Text fontSize={"sm"} color={"gray.500"}>
                        Followers
                     </Text>
                  </Stack>
                  <Stack spacing={0} align={"center"}>
                     <Text fontWeight={600}>23k</Text>
                     <Text fontSize={"sm"} color={"gray.500"}>
                        Followers
                     </Text>
                  </Stack>
               </Stack>
            </Box>
         </Box>
      </Box>
   );
}
