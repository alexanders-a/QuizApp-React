import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { categories } from "./SelectLink";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../../../store/features/quiz/selectLinkSlice";
import X from "../../../animations/simple/XSimple";

export default function SelectCategory() {
  const dispatch = useDispatch();

  return (
    <Flex wrap="wrap" direction="colum" className="f" minH="90vh">
      <Stack w="320px">
        {categories.map((category, i) => (
          <X key={i} i={i}>
            <Link
              w={"full"}
              rel="canonical"
              as={ReachLink}
              to={`/quiz/${category}`}
              _hover={{
                outline: "none",
              }}
              onClick={() => dispatch(selectCategory(category))}
            >
              <Box
                p={6}
                rounded={"lg"}
                bg="gray.300"
                color="black"
                _dark={{
                  bg: "gray.700",
                  color: "white",
                }}
                textAlign={"center"}
              >
                {category}
              </Box>
            </Link>
          </X>
        ))}
      </Stack>
    </Flex>
  );
}
