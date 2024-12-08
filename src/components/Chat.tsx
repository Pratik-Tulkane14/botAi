import { useEffect } from 'react';
interface ChatProp {
    botAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>
    setBotAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>
    handleFeedBackModalOpen: () => void;
}

const Chat = ({ botAiResponse, setBotAiResponse, handleFeedBackModalOpen }: ChatProp) => {
    return (
        <div className="flex flex-col gap-5 mt-20">
            {botAiResponse?.map((item, index) => (
                <div key={index} className='flex flex-col gap-5'>
                    <div
                        className="flex gap-5 rounded-md shadow bg-[#D7C7F421] p-5 text-black drop-shadow-lg"
                    >
                        <img
                            src={'personLogo.svg'}
                            className="rounded-full"
                            alt="user profile pic"
                        />
                        <div>
                            <p className="font-bold">You</p>
                            <p className="font-thin">{item.question}</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-gray-400 font-light">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex gap-5 rounded-md shadow bg-[#D7C7F421] p-5 text-black drop-shadow-lg"
                    >
                        <img
                            src={'botAlImage.svg'}
                            className="rounded-full"
                            alt="user profile pic"
                        />
                        <div>
                            <p className="font-bold">Bot AI</p>
                            <p className="font-thin">{item.response}</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-gray-400 font-light">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                <>
                                    <img
                                        src="likeIcon.svg"
                                        className="h-5 w-5 cursor-pointer"
                                        alt="like icon"
                                    />
                                    <img
                                        src="dislikeIcon.svg"
                                        onClick={handleFeedBackModalOpen}
                                        className="h-5 w-5 cursor-pointer"
                                        alt="dislike icon"
                                    />
                                </>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Chat;
