import { Flex } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
interface NavbarProps {
  setBotAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>
}
const Navbar = ({ setBotAiResponse }: NavbarProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/history");
  }
  const handleNewChat = () => {
    setBotAiResponse([]);
    navigate("/");
  }

  return (
    <>
      <Flex justify="space-between" align="center" onClick={handleNewChat} className='bg-[#D7C7F4] cursor-pointer	p-3'>
        <div className="logo">
          <img src={`brandLogo.svg`} className='rounded-lg' alt="brand Logo" />
        </div>
        <div className="chat">New Chat</div>
        <div className="edit">
          <img src={`/editIcon.svg`} alt="edit icon" />
        </div>
      </Flex>
      <div onClick={handleNavigate} className='bg-[#D7C7F4] m-2 p-2 rounded-lg w-[10rem] mx-auto font-semi-bold cursor-pointer'>
        Past Conversations
      </div>
    </>
  )
}

export default Navbar