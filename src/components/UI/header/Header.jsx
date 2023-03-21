import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Links } from "./Links";
import { Link as ReachLink } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function Header() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          position={"sticky"}
          h={"5vh"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={Logo} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
            >
              {Links.map(({ link, name, id }) => (
                <Link
                  key={id}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  as={ReachLink}
                  to={link}
                >
                  {name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher />
            <Avatar
              ml={2}
              size={"sm"}
              src={
                "https://i.pinimg.com/originals/8b/6e/06/8b6e06b158a13e121d1955553b1eaf70.gif"
              }
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
