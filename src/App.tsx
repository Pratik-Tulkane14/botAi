import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppShell, Group, Burger } from "@mantine/core";
import Welcome from "./components/Welcome";
import History from "./components/History";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import InputBox from "./components/InputBox";

function App() {
  const [opened, setOpened] = useState(false);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const handleFeedbackModalOpen = () => {
    setFeedbackModalOpen((prev) => !prev);
  };
  const toggle = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>

      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <Navbar />
        </AppShell.Navbar>
        <AppShell.Main className="text-[#9785BA] font-bold bg-custom-color pb-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div>Bot AI</div>
                  <div className="flex flex-col items-center mt-auto">
                    <h2 className="text-black">How Can I Help You Today?</h2>
                    <img
                      src={'/brandLogo.svg'}
                      className="rounded-full"
                      alt="Brand Logo"
                    />
                  </div>
                  <Welcome />
                </>
              }
            />
            <Route path="/history" element={<History />} />
          </Routes>
          <>
            <Feedback
              isFeedbackModalOpen={isFeedbackModalOpen}
              handleFeedBackModalOpen={handleFeedbackModalOpen}
            />
            <InputBox />
          </>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;
