import {
  Alert,
  Avatar,
  Blockquote,
  Button,
  Divider,
  Modal,
  Text,
} from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";
import React, { useState } from "react";

function App() {
  const notifications = useNotifications();
  const [opened, setOpened] = useState(false);

  return (
    <div className="border-1 p-4">
      <div className="flex bg-blue-100 border p-4 m-4 rounded-xl">
        <Avatar
          src="https://via.placeholder.com/200x200"
          radius="xl"
          alt="it's me"
        />
        <div className="ml-4">
          <div className="mb-4">Hello, Tailwind CSS</div>

          <div className="mb-4">
            <Blockquote cite="– Forrest Gump">
              Life is like an npm install – you never know what you are going to
              get.
            </Blockquote>
          </div>

          <div className="mb-4">
            <Divider
              variant="dashed"
              labelPosition="center"
              label={
                <>
                  <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
                  <span style={{ marginLeft: 5 }}>Action Buttons</span>
                </>
              }
            />
          </div>

          <div className="mb-1">
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
          </div>
          <div className="mb-1">
            <Button
              onClick={() =>
                notifications.showNotification({
                  title: "Default notification",
                  message: "Hey there, your code is awesome! 🤥",
                })
              }
            >
              Show Notification
            </Button>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={() => setOpened(false)} hideCloseButton>
        <Alert
          color="red"
          title="Something went wrong"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 200,
          }}
          className="bg-blue-100"
        >
          Application crashed, try refreshing the page, if it does not help
          please contact our support
          <br />
          <br />
          Error message:
          <Text color="red" size="sm">
            undefined is not a function
          </Text>
        </Alert>
      </Modal>
    </div>
  );
}

export default App;
