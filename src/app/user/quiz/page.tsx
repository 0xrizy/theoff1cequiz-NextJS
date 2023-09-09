"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface QuizData {
  [key: string]: {
    question: string;
    o1: string;
    o2: string;
    o3: string;
    o4: string;
    answer: string;
  };
}

function Quiz() {
  const [quizData, setQuizData] = useState<QuizData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/openai");
        const parsedData: QuizData = JSON.parse(
          response.data.data[0].message.content
        );
        setQuizData(parsedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleOptionSelect = (
    questionKey: string,
    selectedOption: string
  ): void => {
    setUserAnswers({
      ...userAnswers,
      [questionKey]: selectedOption,
    });
  };

  const handleSubmitQuiz = (): void => {
    let score = 0;
    for (const questionKey in quizData) {
      if (userAnswers.hasOwnProperty(questionKey)) {
        if (userAnswers[questionKey] === quizData[questionKey].answer) {
          score++;
        }
      }
    }
    setScore(score);
    window.scrollTo({
        top: document.documentElement.scrollHeight, // Scroll to the bottom
        behavior: 'smooth', // Smooth scrolling animation
      });
  };

  return (
    <div className="container mx-auto p-4 h-full">
      {isLoading ? (
        <div className="text-center">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="text-gray-200 animate-spin">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 fill-current"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-extrabold mb-4">Quiz Questions</h1>
          {Object.keys(quizData).map((questionKey) => {
            const question = quizData[questionKey];
            const selectedOption = userAnswers[questionKey] || "";

            return (
              <div
                key={questionKey}
                className="mb-6 p-4 border border-gray-300 shadow-lg rounded-lg"
              >
                <h1 className="font-bold text-2xl mb-2">{question.question}</h1>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  {Object.keys(question)
                    .filter((optionKey) => optionKey.startsWith("o"))
                    .map((optionKey) => (
                      <li
                        key={optionKey}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name={`question_${questionKey}`}
                          value={question[optionKey]}
                          checked={selectedOption === question[optionKey]}
                          onChange={() =>
                            handleOptionSelect(questionKey, question[optionKey])
                          }
                          className="text-blue-500 focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                          htmlFor={`question_${questionKey}`}
                          className="text-lg"
                        >
                          {question[optionKey]}
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            );
          })}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg
                className="w-4 h-4 text-gray-700 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>
          </div>

          <h1 className="mb-8 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
            Check {""}
            <mark className="px-4  text-white bg-green-400 rounded dark:bg-blue-500">
            Score
            </mark>{"  "}
            here 
          </h1>

          <button
            onClick={handleSubmitQuiz}
            className="flex justify-center w-full px-6 py-5 text-text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl text-center mr-2 mb-2"
          >
            Submit Quiz
          </button>

          {score !== null && (
            <p className=" flex justify-center mt-4 text-2xl text-white mb-4  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
              Your Score: {score} out of {Object.keys(quizData).length}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
