import {
   Flex,
   Box,
   Input,
   Text,
   Heading,
   Button,
   Avatar,
   HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaRegCommentDots } from "react-icons/fa";
export const Tweets = () => {
   const [tweets, setTweets] = useState([]);
   const userName = useSelector((state) => state.user.value);
   const tweetRef = useRef();
   const getData = async () => {
      try {
         const response = await axios.get(
            "http://localhost:2000/tweets?_sort=id&_order=desc"
         );
         setTweets(response.data);
      } catch (err) {
         console.log(err);
      }
   };
   const handleButton = async () => {
      try {
         const input = {
            tweet: tweetRef.current.value,
            name: userName.name,
            email: userName.email,
         };
         const response = await axios.post(
            "http://localhost:2000/tweets/",
            input
         );
         console.log(response);
         console.log(input);
      } catch (err) {
         console.log(err);
      }
      window.location.reload();
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <Box width="50%" padding="5px">
         <Box
            border="1px solid"
            borderColor="gray.400"
            rounded="10px"
            height="200px"
            padding="10px"
            margin="0 auto 10px ">
            <Heading>Beranda</Heading>
            <Flex
               gap="40px"
               padding="30px 0"
               alignItems="center"
               justifyContent="space-evenly">
               <Text>
                  <Avatar name={userName.name} />
                  <Input placeholder="" size="lg" width="50%" ref={tweetRef} />
               </Text>
               <Button
                  bg="blue.400"
                  px="30px"
                  rounded="30px"
                  color="white"
                  onClick={handleButton}>
                  Tweet
               </Button>
            </Flex>
         </Box>
         <Box>
            {tweets.map((item, index) => {
               return (
                  <Box
                     margin="10px auto"
                     alignItems="center"
                     border="1px solid"
                     borderColor="gray.400"
                     rounded="10px">
                     <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        padding="2% 10%">
                        <HStack>
                           <Avatar name={userName.name} size="md" />
                           <Flex flexDirection="column" padding="0 20px">
                              <Text>
                                 {item.name} {item.email}
                              </Text>
                              {item.tweet}
                           </Flex>
                        </HStack>
                     </Flex>
                     <FaRegCommentDots />
                  </Box>
               );
            })}
         </Box>
      </Box>
   );
};
