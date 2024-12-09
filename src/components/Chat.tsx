import { Rating } from "@mantine/core";
import React from "react";

interface ChatProp {
    botAiResponse: {
        id: number;
        question: string;
        response: string;
        feedback?: string;
        rating?: number;
        isLike?: boolean;
    }[];
    setBotAiResponse: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                question: string;
                response: string;
                feedback?: string;
                rating?: number;
                isLike?: boolean;
            }[]
        >
    >;
    handleFeedbackModalOpen: () => void;
    handleClick: (id: number) => void;
}

const Chat: React.FC<ChatProp> = ({
  botAiResponse,
  setBotAiResponse,
  handleFeedbackModalOpen,
  handleClick,
}: ChatProp) => {
  const handleLike = (id: number) => {
    setBotAiResponse((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isLike: true } : item))
    );
  };
  const handleDislike = (id: number) => {
    handleClick(id);
    handleFeedbackModalOpen();
  };
  const handleRatingChange = (id: number, value: number) => {
    setBotAiResponse((prev) =>
      prev.map((item) => (item.id === id ? { ...item, rating: value } : item))
    );
  };

  return (
    <div className="flex flex-col gap-5 mt-20">
      {botAiResponse?.map((item, index) => (
        <div key={index} className="flex flex-col gap-5">
          <div className="flex gap-5 rounded-md shadow bg-[#D7C7F421] p-5 text-black drop-shadow-lg">
            <img
              src={"personLogo.svg"}
              className="rounded-full"
              alt="user profile pic"
            />
            <div>
              <p className="font-bold">You</p>
              <p className="font-thin">{item.question}</p>
              <div className="flex gap-5 items-center">
                <p className="text-gray-400 font-light">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 rounded-md shadow bg-[#D7C7F421] p-5 text-black drop-shadow-lg">
            <img
              src={"botAlImage.svg"}
              className="rounded-full"
              alt="user profile pic"
            />
            <div>
              <p className="font-bold">Bot AI</p>
              <p className="font-thin">{item.response}</p>
              <div className="flex gap-5 items-center">
                <p className="text-gray-400 font-light">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <>
                  <img
                    src="likeIcon.svg"
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => handleLike(item.id)}
                    alt="like icon"
                  />
                  <img
                    src="dislikeIcon.svg"
                    onClick={() => handleDislike(item.id)}
                    className="h-5 w-5 cursor-pointer"
                    alt="dislike icon"
                  />
                </>
              </div>
            </div>
          </div>
          {(item.feedback || item.isLike) && (
            <div className="flex flex-col gap-5 rounded-md shadow bg-[#D7C7F421] p-5 text-black drop-shadow-lg pl-[6.5rem]">
              {item.isLike && (
                <div className="flex flex-col">
                  <p className="font-thin">Rate this response:</p>
                  <Rating
                    defaultValue={5}
                    color="black"
                    size="xs"
                    value={item.rating || 0}
                    onChange={(value) => handleRatingChange(item.id, value)}
                  />
                </div>
              )}
              {item.feedback && (
                <p className="font-thin">
                  <span className="font-bold mr-2">Feedback:</span>
                  {item.feedback}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chat;
