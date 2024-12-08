import { Button } from '@mantine/core'
import { useState } from 'react'
import staticData from '../constants/staticData';
import botAiResponse from '../constants/botAiResponse';
interface InputBox {
    botAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>
    setBotAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>
}

const InputBox = ({ botAiResponse, setBotAiResponse }: InputBox) => {
    const [stringValue, setStringValue] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = staticData.filter((item) => item.question == stringValue)

        setBotAiResponse((prev) => [...prev, ...result]);
        setStringValue("");
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-3 md:grid-cols-7 gap-5 items-center sticky bottom-0 bg-gray-200 px-4 py-8 mt-[14rem]">

            <div className="col-span-2 md:col-span-6">
                <input
                    type="text"
                    value={stringValue}
                    onChange={(event) =>
                        setStringValue(event.currentTarget.value)
                    }
                    className='w-full h-10 px-4 border rounded-md outline-gray-400'
                />
            </div>
            {/* Buttons */}
            <div className="col-span-1 flex gap-5">
                <Button variant="filled" type='submit' color="gray">Ask</Button>
                <Button variant="filled" color="gray">Save</Button>
            </div>

        </form>
    )
}

export default InputBox