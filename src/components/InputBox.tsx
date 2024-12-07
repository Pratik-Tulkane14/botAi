import { Button } from '@mantine/core'
import { useState } from 'react'

const InputBox = () => {
    const [stringValue, setStringValue] = useState('');

    return (
        <div className="grid grid-cols-3 md:grid-cols-7 gap-5 items-center sticky bottom-0 bg-gray-200 px-4 py-8 mt-[14rem]">
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
                <Button variant="filled" color="gray">Ask</Button>
                <Button variant="filled" color="gray">Save</Button>
            </div>
        </div>
    )
}

export default InputBox