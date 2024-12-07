import { useDisclosure } from "@mantine/hooks";
import { Button, Input, Modal } from '@mantine/core';
import { useEffect } from "react";
interface FeedbackProp {
    isFeedbackModalOpen: boolean,
    handleFeedBackModalOpen: () => void
}
const Feedback = ({ isFeedbackModalOpen, handleFeedBackModalOpen }: FeedbackProp) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
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
                <div className="flex flex-col gap-5">
                    <Input placeholder="Please write something..." />
                    <Button className="ml-auto" onClick={open} color="gray">
                        Submit
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default Feedback