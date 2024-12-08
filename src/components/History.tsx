import { NativeSelect, Rating } from "@mantine/core";
import history from "../constants/history";
import { useEffect, useState } from "react";
import HistoryData from "../interface";
const History = () => {
    const rating = [
        { label: "All Ratings", value: "6" },
        { label: "1 Star", value: "1" },
        { label: "2 Star", value: "2" },
        { label: "3 Star", value: "3" },
        { label: "4 Star", value: "4" },
        { label: "5 Star", value: "5" },
    ]
    const [value, setValue] = useState<number>();
    const [data, setData] = useState<HistoryData[]>([])
    const [originalData, setOriginalData] = useState<HistoryData[]>([]);
    const handleFilter = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        const inputValue = Number(event.currentTarget.value);
        setValue(inputValue)
        if (!originalData.length) {
            setOriginalData(data);
        }

        if (inputValue == 6) {
            setData(originalData);
        } else {
            const result = originalData.filter((item) => item.rating == inputValue);
            setData(result);
        }
    };

    useEffect(() => {
        if (history?.length>0) {

            setData(history)
            setOriginalData(history)
        }
    }, [])
    return (
        <>
            <div className="flex flex-col items-center">
                <h3 className="text-black font-semi-bold ">Conversation History</h3>
                <NativeSelect
                    value={value}
                    onChange={(event) => handleFilter(event)}
                    label="Filter by rating"
                    className="text-black w-32 font-normal"
                    data={rating}
                />
            </div>
            <div className="">
                <h3 className="text-black font-normal">Today’s Chats</h3>
                <div className="flex flex-col gap-5 mt-5 ">
                    {data?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col bg-[#D7C7F4] p-5 gap-5 rounded-md"
                            >
                                <div className="flex gap-5">
                                    <div className="flex w-[5%]">
                                        <img
                                            src={`personLogo.svg`}
                                            className="rounded-lg"
                                            alt="brand Logo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[95%]">
                                        <div className="text-black">
                                            <p className="font-bold ">You</p>
                                            <p className="font-thin">{item.question}</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <p className="font-normal">10.30 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  gap-5">
                                    <div className="w-[5%]">
                                        <img
                                            src={`botAlImage.svg`}
                                            className="rounded-lg"
                                            alt="botAlImage Logo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[95%]">
                                        <div className="text-black">
                                            <p className="font-bold ">Bot AI</p>
                                            <p className="font-thin">{item.response}</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <p className="font-normal">10.30 AM</p>
                                            {item.isRating ? (
                                                <Rating
                                                    defaultValue={item.rating}
                                                    color="black"
                                                    size="xs"
                                                    readOnly
                                                />
                                            ) : (
                                                <>
                                                    <img
                                                        src={`likeIcon.svg`}
                                                        className="h-5 w-5 cursor-pointer"
                                                        alt="likeIcon"
                                                    />
                                                    <img
                                                        src={`dislikeIcon.svg`}
                                                        className="h-5 w-5 cursor-pointer"
                                                        alt="dislikeIcon"
                                                    />
                                                </>
                                            )}
                                        </div>
                                        <p className="font-thin text-black">
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

export default History;
