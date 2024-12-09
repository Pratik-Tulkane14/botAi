import { Flex } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
interface NavbarProps {
  setBotAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>
  handleFeedbackModalOpen: () => void
}
const Navbar = ({ handleFeedbackModalOpen, setBotAiResponse }: NavbarProps) => {
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
      <Flex justify="space-between" align="center" className='bg-[#D7C7F4]	p-3'>
        <div className="logo cursor-pointer">
          <Link to="/" >
            <img src={`brandLogo.svg`} className='rounded-lg' alt="brand Logo" />
          </Link>
        </div>
        <div className="chat cursor-pointer" onClick={handleNewChat}>New Chat</div>
        <div className="edit cursor-pointer" onClick={handleFeedbackModalOpen}>
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