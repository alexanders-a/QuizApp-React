import React from "react";
import { Stack, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function BackIcon() {
  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  const goToHome = () => navigation("/");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={1}
      zIndex={10000}
      vcolor={"gray.800"}
    >
      <Flex>
        <Stack
          h="50px"
          w="50px"
          borderRadius={"full"}
          justify={"center"}
          align={"center"}
          fontSize={24}
          cursor={"pointer"}
          m={3}
          p={2}
          onClick={goBack}
          bg="blue.50"
          color="black"
          _dark={{
            bg: "gray.700",
            color: "white",
          }}
          boxShadow={"2xl"}
          onDoubleClick={goToHome}
        >
          <Image
            alt="back"
            title="back"
            loading="eager"
            htmlHeight="50px"
            htmlWidth="50px"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/back-4897647-4081330.png"
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
