import {
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { play, playone } from "./audio";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuizData } from "../../store/features/quiz/quizSlice";
import HeaderQuiz from "./components/header/HeaderQuiz";
import useKeyPress from "./hooks/useKeyPress";
import "./styles/quiz.scss";

function Result({ correct, setCorrect, setStep, questionLength }) {
  return (
    <Stack className="result f">
      <Img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="flaticon)"
      />
      <Text fontSize={"xl"}>
        Вы отгадали {correct} ответа из {questionLength}
      </Text>
      <Button
        onClick={() => {
          setCorrect(0);
          setStep(0);
          return;
        }}
      >
        Попробовать снова
      </Button>
    </Stack>
  );
}

function Game({
  step,
  setStep,
  question,
  category,
  handleAnswer,
  areDisabled,
  questionLength,
  setAreDisabled,
}) {
  const progress = Math.round((step / questionLength) * 100);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack>
      <Stack className="progress">
        <Stack
          className="progress__inner"
          style={{
            width: `${progress}%`,
          }}
        ></Stack>
      </Stack>
      <Heading as={"h1"} className="h2" fontSize={"25px"}>
        {question.title}
      </Heading>
      {question.img && (
        <Img
          alt="quiz"
          title="quiz"
          loading="eager"
          htmlHeight="full"
          htmlWidth="620px"
          borderRadius={"10px"}
          w={"full"}
          src={require(`./assets/${category}/${question.img}.svg`)}
        />
      )}
      <Stack>
        {question.variants.map((text, index) => (
          <Stack
            key={index}
            cursor={areDisabled ? "no-drop" : "pointer"}
            className={!areDisabled ? "button-quiz" : "button-quiz disabled"}
            onClick={() => {
              if (areDisabled === false) handleAnswer(index);
            }}
          >
            <Text>{text}</Text>
          </Stack>
        ))}
      </Stack>
      <Flex>
        <Button
          cursor={!areDisabled ? "no-drop" : "pointer"}
          className={areDisabled ? "button-quiz" : "button-quiz disabled"}
          mr={1}
          w={"full"}
          rightIcon={
            <Img
              alt="next"
              title="next"
              loading="eager"
              htmlHeight="40px"
              htmlWidth="40px"
              w="40px"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/next-arrow-5910639-4897312.png"
            />
          }
          onClick={() => {
            if (!areDisabled === false) {
              setAreDisabled(false);
              setStep(step + 1);
            }
          }}
        >
          Продолжить
        </Button>
        <Button
          cursor={!areDisabled ? "no-drop" : "pointer"}
          className={areDisabled ? "button-quiz" : "button-quiz disabled"}
          ml={1}
          w={"full"}
          rightIcon={
            <Img
              alt="help"
              title="help"
              loading="eager"
              htmlHeight="40px"
              htmlWidth="40px"
              w="40px"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/help-5591127-4652904.png"
            />
          }
          onClick={() => {
            if (!areDisabled === false) {
              onOpen();
            }
          }}
        >
          Пояснение
        </Button>
        <Modal onClose={onClose} size="2xl" isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent bg={"white"} color="black">
            <ModalHeader>Пояснение</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {question.explain.map((e, index) => (
                <Text
                  key={index}
                  borderRadius={10}
                  border="2px solid rgba(0, 0, 0, 0.1)"
                  p={2}
                  m={5}
                >
                  {index + 1}.{e}
                </Text>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Stack>
  );
}

function QuizRoute() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { category } = useParams();
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [areDisabled, setAreDisabled] = useState(false);
  const [questionLength, setQuestionLength] = useState(0);
  const { questions, loading, error } = useSelector((state) => state.quiz);
  const PressNext = useKeyPress("Enter");
  const { colorMode } = useColorMode();

  useEffect(() => {
    try {
      dispatch(getQuizData());
    } catch (err) {
      console.log(error, err);
    }
  }, [dispatch, error]);

  function getSelectQuiz() {
    if (category === "") {
      return questions[step];
    }
    const question = questions.filter((item) => item.category === category);

    setQuestionLength(question.length);

    return question[step];
  }

  useEffect(() => {
    if (PressNext) {
      if (!areDisabled === false) {
        setAreDisabled(false);
        setStep(step + 1);
      }
    }
  }, [PressNext, areDisabled, step]);

  const filteredList = useMemo(getSelectQuiz, [category, questions, step]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect === filteredList.correct) {
      setCorrect(correct + 1);
      toast(
        {
          title: "Ваш ответ верный",
          status: "success",
          duration: 2000,
          position: "bottom-left",

          isClosable: true,
        },
        playone()
      );
    } else {
      toast(
        {
          title: "Ваш ответ неверный",
          status: "error",
          duration: 2000,
          position: "bottom-right",
          isClosable: true,
        },
        play()
      );
    }

    setAreDisabled(true);
  };
  return (
    <Stack minH={"90vh"} className="f">
      {loading ? (
        <Heading
          as="h2"
          fontSize="60px"
          bgGradient="linear(to-r, purple.400, purple.600)"
          backgroundClip="text"
        >
          Loading...
        </Heading>
      ) : (
        <>
          <HeaderQuiz step={step} questions={questionLength} />
          <Stack
            boxShadow={"2xl"}
            className={colorMode === "light" ? "quiz" : "quiz quiz-dark"}
          >
            {step !== questionLength ? (
              <Game
                step={step}
                category={category}
                questionLength={questionLength}
                setStep={setStep}
                question={filteredList}
                handleAnswer={handleAnswer}
                areDisabled={areDisabled}
                setAreDisabled={setAreDisabled}
              />
            ) : (
              <Result
                questionLength={questionLength}
                correct={correct}
                setCorrect={setCorrect}
                setStep={setStep}
                category={category}
              />
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default QuizRoute;
