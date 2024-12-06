import { AppShell, Burger,  Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function App() {

  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar display="flex">
          <Flex justify="space-between" align="center" className='bg-gray-300	p-3'>
            <div className="logo">
              <img src={`brandLogo.svg`} className='rounded-lg' alt="brand Logo" />
            </div>
            <div className="chat">New Chat</div>
            <div className="edit">
              <img src={`/editIcon.svg`} alt="edit icon" />
            </div>
          </Flex>
          <div className='bg-gray-300 m-2 p-2 rounded-lg w-[10rem] mx-auto font-semi-bold'>
            Past Conversations
          </div>
        </AppShell.Navbar>
        <AppShell.Main className='text-[#9785BA]'>Bot AI</AppShell.Main>
      </AppShell>
    </>
  )
}

export default App