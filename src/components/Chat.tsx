import staticData from '../constants/staticData'
interface ChatProp{
    handleFeedBackModalOpen:()=>void
}
const Chat = ({ handleFeedBackModalOpen }:ChatProp) => {
    return (
        <div className="flex flex-col gap-5 mt-20">
            {staticData?.map((item, index) => {
                return (
                    <div className="flex gap-5 rounded-md shadow bg-[#D7C7F421] p-5 text-black drop-shadow-lg " key={item.id}>
                        <img src={index % 2 === 0 ? 'personLogo.svg' : 'botAlImage.svg'} className='rounded-full' alt="user profile pic" />
                        <div className="">
                            <p className='font-bold'>{index % 2 === 0 ? 'You' : 'Bot AI'}</p>
                            <p className='font-thin'>{index % 2 === 0 ? item.question : item.response}</p>
                            <div className="flex gap-5">
                                <p className='text-gray-400 font-light'>10.30 AM</p>
                                {index % 2 !== 0 &&
                                    <>
                                        <img src={`likeIcon.svg`} className='h-5 w-5 cursor-pointer' alt="likeIcon" />
                                    <img src={`dislikeIcon.svg`} onClick={handleFeedBackModalOpen} className='h-5 w-5 cursor-pointer' alt="dislikeIcon" />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Chat