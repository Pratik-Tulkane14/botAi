import { Rating } from "@mantine/core";
import history from "../constants/history";
const Histroy = () => {
    return (
        <>
            <div className="flex justify-center">
                <h3 className="text-black font-semi-bold ">Conversation History</h3>
            </div>
            <div className="">
                <h3 className="text-black font-semi-bold">Today’s Chats</h3>
                <div className="flex flex-col gap-5 mt-5 ">
                    {history?.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-col bg-[#D7C7F4] p-5 gap-5 rounded-md">
                                <div className="flex gap-5">
                                    <div className="w-20">
                                        <img
                                            src={`personLogo.svg`}
                                            className="rounded-lg"
                                            alt="brand Logo"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-black">
                                            <p className="font-bold ">You</p>
                                            <p className="font-normal">{item.question}</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <p className="font-normal">10.30 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  gap-5">
                                    <div className="">
                                        <img
                                            src={`botAlImage.svg`}
                                            className="rounded-lg"
                                            alt="botAlImage Logo"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-black">
                                            <p className="font-bold ">Bot AI</p>
                                            <p className="font-normal">{item.response}</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <p className="font-normal">10.30 AM</p>
                                            {item.isRating ? (
                                                <Rating
                                                    defaultValue={3}
                                                    color="black"
                                                    size="xs"
                                                    readOnly
                                                />
                                            ) : (
                                                <>
                                                    <img
                                                        src={`likeIcon.svg`}
                                                        className="h-5 w-5"
                                                        alt="likeIcon"
                                                    />
                                                    <img
                                                        src={`dislikeIcon.svg`}
                                                        className="h-5 w-5"
                                                        alt="dislikeIcon"
                                                    />
                                                </>
                                            )}
                                        </div>
                                        <p className="font-normal text-black">
                                            <span className="text-black font-bold">Feedback: </span>
                                            Not a good experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Histroy;
