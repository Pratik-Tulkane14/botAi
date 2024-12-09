import { useDisclosure } from "@mantine/hooks";
import { Button, Input, Modal } from '@mantine/core';
import { useEffect, useState } from "react";
import staticData from "../constants/staticData";
import botAiResponse from "../constants/botAiResponse";
interface FeedbackProp {
    id: number,
    isFeedbackModalOpen: boolean,
    botAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; feedback: string }[]>>
    setBotAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; feedback: string }[]>>

    handleFeedBackModalOpen: () => void
}
const Feedback = ({ id, botAiResponse, setBotAiResponse, isFeedbackModalOpen, handleFeedBackModalOpen }: FeedbackProp) => {
    const [value, setValue] = useState<string>('');
    const [opened, { open, close }] = useDisclosure(isFeedbackModalOpen);
    const handleClose = () => {
        close();
        handleFeedBackModalOpen()
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setBotAiResponse((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, feedback: value } : item
            )
        );
        handleFeedBackModalOpen();
        close();
        setValue('');
    }
    useEffect(() => {
        if (isFeedbackModalOpen) {
            open()
        } else {
            close()
        }
    }, [isFeedbackModalOpen, open, close]);
    return (
        <>
            <Modal
                opened={opened}
                onClose={handleClose}
                centered
                title={
                    <div className="flex items-center gap-2">
                        <img
                            src="bulbIcon.svg"
                            className="rounded-lg"
                            alt="brand logo"
                        />
                        <span className="font-semi-bold">Provide Additional Feedback</span>
                    </div>
                }
            >
                {/* Modal content */}
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">

                    <Input placeholder="Please write something..." required value={value}
                        onChange={(event) => setValue(event.currentTarget.value)} />
                    <Button type="submit" className="ml-auto" onClick={open} color="gray">
                        Submit
                    </Button>
                </form>
            </Modal>
        </>
    )
}

export default Feedback