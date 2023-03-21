import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Finish(props) {
  const { correct, questions, setIsFinished, setAnswersShown, setQuiz } = props;
  return (
    <>
      <Stack justify={"center"} align={"center"} minH={"90vh"}>
        <Text>
          Правильно {correct} из {questions.length}{" "}
        </Text>
        <Stack maxW={"200px"}>
          <Button onClick={() => (window.location.href = "/quiz")}>
            Повторить
          </Button>
          <Button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setQuiz(0);
            }}
          >
            Посмотреть ответы
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
