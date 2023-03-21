import sendGetRequest from "../index";

export const fetchQuizData = () => {
    return sendGetRequest("get", "http://localhost:4000/questions");
}