import React from "react";
import { Stack, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
// import BackIcon from "../../../../assets/icons/Back.svg";
// import Home from "../../../../assets/icons/Home.svg";
// import Reload from "../../../../assets/icons/Reload.svg";
// import Lamp from "../../../../assets/icons/Lamp.svg";

import "./headerQuiz.scss";

export default function HeaderQuiz({ questions, step }) {
  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  const goToHome = () => navigation("/");
  const reload = () => {
    window.location.reload();
  };

  return (
    <Flex
      maxW={"700px"}
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
          boxShadow={"2xl"}
          onDoubleClick={goToHome}
          bg="gray.300"
          _dark={{
            bg: "gray.700",
          }}
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
        <Stack
          h="50px"
          w="50px"
          borderRadius={"full"}
          justify={"center"}
          align={"center"}
          fontSize={24}
          cursor={step !== questions ? "pointer" : "no-drop"}
          m={3}
          p={2}
          bg={step !== questions ? "gray.100" : "gray.100"}
          boxShadow="2xl"
          _dark={{
            bg: "gray.900",
          }}
        >
          <Image
            alt="help"
            title="help"
            loading="eager"
            htmlHeight="50px"
            htmlWidth="50px"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/light-bulb-2872327-2389492.png"
          />
        </Stack>
      </Flex>
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
          bg="gray.300"
          _dark={{
            bg: "gray.700",
          }}
          onDoubleClick={goToHome}
          className="rating"
          boxShadow={"2xl"}
        >
          <Image
            alt="record"
            title="record"
            loading="eager"
            htmlHeight="50px"
            htmlWidth="50px"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/education-trophy-6101148-5012883.png"
          />
        </Stack>
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
          onClick={goToHome}
          bg="gray.300"
          _dark={{
            bg: "gray.700",
          }}
          boxShadow={"2xl"}
        >
          <Image
            alt="home"
            title="home"
            loading="eager"
            htmlHeight="50px"
            htmlWidth="50px"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/home-2997235-2516273.png"
          />
        </Stack>
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
          onClick={reload}
          bg="gray.300"
          _dark={{
            bg: "gray.700",
          }}
          boxShadow={"2xl"}
        >
          <Image
            alt="reload"
            title="reload"
            loading="eager"
            htmlHeight="50px"
            htmlWidth="50px"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/refresh-4897635-4081318.png"
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
