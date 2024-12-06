import { AppShell, Burger, Button, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

function App() {

  const [opened, { toggle }] = useDisclosure();

  const [stringValue, setStringValue] = useState('');
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
        <AppShell.Main className='text-[#9785BA] font-bold bg-gray-100'>Bot AI
          {/* Bot Header */}
          <div className="flex flex-col items-center mt-auto">
            <h2 className='text-black'>How Can I Help You Today?</h2>
            <img src={`brandLogo.svg`} className='rounded-full' alt="brand Logo" />
          </div>
          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black mt-10">
            <div className="bg-white p-6 rounded shodow">
              <h5>Hi, what is the weather</h5>
              <p className='text-gray-400 text-sm font-normal'>Get immediate AI generated response</p>
            </div>
            <div className="bg-white p-6 rounded shodow">
              <h5>Hi, what is my location?</h5>
              <p className='text-gray-400 text-sm font-normal'>Get immediate AI generated response</p>
            </div>
            <div className="bg-white p-6 rounded shodow">
              <h5>Hi, how are you</h5>
              <p className='text-gray-400 text-sm font-normal'>Get immediate AI generated response</p>
            </div>
            <div className="bg-white p-6 rounded shodow">
              <h5>Hi, what is the temperature</h5>
              <p className='text-gray-400 text-sm font-normal'>Get immediate AI generated response</p>
            </div>
          </div>
          {/* Chat section */}
          
          {/* Input section */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-5 mt-10 items-center">
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
        </AppShell.Main>
      </AppShell>
    </>
  )
}

export default App