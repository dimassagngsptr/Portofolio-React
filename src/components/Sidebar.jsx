import React, { useState } from "react";
import {
   IconButton,
   Avatar,
   Box,
   CloseButton,
   Flex,
   HStack,
   Icon,
   Button,
   useColorMode,
   useColorModeValue,
   Text,
   Menu,
   MenuButton,
   MenuDivider,
   MenuItem,
   MenuList,
   Grid,
} from "@chakra-ui/react";
import {
   FiHome,
   FiTrendingUp,
   FiCompass,
   FiMenu,
   FiBell,
   FiSun,
   FiMoon,
} from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { useSelector } from "react-redux";
import { BsChatText } from "react-icons/bs";
import { Tweets } from "./tweet";
import Users from "./users";

const LinkItems = [
   { name: "Home", icon: FiHome },
   { name: "Trending", icon: FiTrendingUp },
   { name: "Explore", icon: FiCompass },
   { name: "Chat", icon: BsChatText },
];

function SidebarContent({ onClose, onOpen, ...rest }) {
   const user = useSelector((state) => state.user.value);
   const { colorMode, toggleColorMode } = useColorMode();
   const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
   };
   return (
      <Box
         transition="3s ease"
         bg={useColorModeValue("white", "gray.800")}
         borderRight="1px"
         borderRightColor={useColorModeValue("gray.200", "gray.700")}
         w={{ base: "full", md: 80 }}
         h="full"
         px="30px"
         {...rest}>
         <Flex
            h="20"
            alignItems="center"
            px="10"
            justifyContent="space-between"
            borderBottom="1px"
            width="100%">
            <Flex
               alignItems="center"
               gap="100px"
               fontSize="2xl"
               fontFamily="monospace"
               fontWeight="bold">
               <FaSquareXTwitter />
               <IconButton
                  size="lg"
                  variant="ghost"
                  aria-label="toggle mode warna"
                  icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
                  onClick={toggleColorMode}
               />
            </Flex>
            <CloseButton
               display={{ base: "flex", md: "none" }}
               onClick={onClose}
            />
         </Flex>
         {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
               {link.name}
            </NavItem>
         ))}
         <Flex
            ml={{ base: 0, md: 0 }}
            px={{ base: 0, md: 0 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="0px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}>
            <IconButton
               display={{ base: "flex", md: "none" }}
               onClick={onOpen}
               variant="outline"
               aria-label="open menu"
               icon={<FiMenu />}
            />
            <HStack spacing={{ base: "0", md: "0" }} py="">
               <IconButton
                  size="lg"
                  variant="ghost"
                  aria-label="open menu"
                  icon={<FiBell />}
                  pr="30px"
               />
               <Box>
                  <Menu>
                     <MenuButton
                        py={2}
                        transition="all 0.3s"
                        _focus={{ boxShadow: "none" }}>
                        <HStack bg="grey.800">
                           <Avatar size={"sm"} src={""} name={user.name} />
                           <Flex
                              flexDirection="column"
                              display={{ base: "none", md: "flex" }}
                              alignItems="flex-start"
                              spacing="1px"
                              ml="2">
                              <Text fontSize="sm">{user.name}</Text>
                              <Text fontSize="xs">{user.email}</Text>
                           </Flex>
                           <Box
                              display={{ base: "none", md: "flex" }}
                              mx="30px">
                              <SlOptions />
                           </Box>
                        </HStack>
                     </MenuButton>
                     <MenuList
                        bg={useColorModeValue("white", "gray.800")}
                        borderColor={useColorModeValue("gray.200", "gray.700")}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Favourite</MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                     </MenuList>
                  </Menu>
               </Box>
            </HStack>
         </Flex>
      </Box>
   );
}

function NavItem({ icon, children, ...rest }) {
   return (
      <Box
         as="a"
         href="#"
         //  style={{ textDecoration: "none" }}
         //  _focus={{ boxShadow: "none" }}
      >
         <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
               bg: "black",
               color: "white",
            }}
            {...rest}>
            {icon && (
               <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                     color: "white",
                  }}
                  as={icon}
               />
            )}
            {children}
         </Flex>
      </Box>
   );
}

export const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const onOpen = () => setIsOpen(true);
   const onClose = () => setIsOpen(false);

   return (
      <Flex>
         <SidebarContent />
         <Tweets />
         <Users />
      </Flex>
   );
};
