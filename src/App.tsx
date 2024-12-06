import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
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
        <AppShell.Navbar p="md">
          
        </AppShell.Navbar>
        <AppShell.Main>Bot AI</AppShell.Main>
      </AppShell>
    </>
  )
}

export default App