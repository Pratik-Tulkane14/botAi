import { useDisclosure } from "@mantine/hooks";
import { Button, Input, Modal } from "@mantine/core";
import { useEffect, useState } from "react";

interface FeedbackProp {
    id: number;
    isFeedbackModalOpen: boolean;
    setBotAiResponse: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                question: string;
                response: string;
                feedback?: string;
            }[]
        >
    >;
    handleFeedBackModalOpen: () => void;
}

const Feedback: React.FC<FeedbackProp> = ({
    id,
    setBotAiResponse,
    isFeedbackModalOpen,
    handleFeedBackModalOpen,
}) => {
    const [value, setValue] = useState<string>("");
    const [opened, { open, close }] = useDisclosure(false);

    const handleClose = () => {
        close();
        handleFeedBackModalOpen();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setBotAiResponse((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, feedback: value } : item
            )
        );
        setValue(""); // Reset the input value after updating state
        handleClose();
    };

    useEffect(() => {
        if (isFeedbackModalOpen) open();
        else close();
    }, [isFeedbackModalOpen, open, close]);

    const modalTitle = (
        <div className="flex items-center gap-2">
            <img
                src="bulbIcon.svg"
                className="rounded-lg"
                alt="Provide feedback"
            />
            <span className="font-semibold">Provide Additional Feedback</span>
        </div>
    );

    return (
        <Modal
            opened={opened}
            onClose={handleClose}
            centered
            title={modalTitle}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                    placeholder="Please write something..."
                    required
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    aria-label="Feedback Input"
                />
                <Button
                    type="submit"
                    className="ml-auto"
                    color="gray"
                    aria-label="Submit Feedback"
                >
                    Submit
                </Button>
            </form>
        </Modal>
    );
};

export default Feedback;
