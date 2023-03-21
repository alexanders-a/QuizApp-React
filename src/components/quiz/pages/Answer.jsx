import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Answer(props) {
  const { quiz, questions, setQuiz } = props;
  return (
    <>
      <Stack justify={"center"} align={"center"} minH={"90vh"}>
        <Heading>
          Вопрос {quiz + 1} из {questions.length}
        </Heading>
        <Text>{questions[quiz].title}</Text>
        <Text>
          {questions[quiz].answers.filter((opcion) => opcion.isCorrect)[0].text}
        </Text>
        <Button
          Color={
            "linear-gradient(335deg, rgba(131,58,180,1) 0%, rgba(145,29,253,1) 94%, rgba(252,176,69,1) 100%)"
          }
          onClick={() => {
            if (quiz === questions.length - 1) {
              window.location.href = "/quiz";
            } else {
              setQuiz(quiz + 1);
            }
          }}
        >
          {quiz === questions.length - 1 ? "Вернуться" : "Далее"}
        </Button>
      </Stack>
    </>
  );
}
