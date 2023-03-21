import { Img, Stack } from "@chakra-ui/react";
import React from "react";
import JS from "../assets/icons/JS.svg";

export default function Home() {
  return (
    <>
      <Stack minH={"90vh"} justify="center" align="center">
        <Img src={JS} w="100px" borderRadius="10px" />
      </Stack>
    </>
  );
}
