import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export const withMantine = (Story) => (
  <MantineProvider>
    <NotificationsProvider position="top-right" zIndex={2077}>
      <Story />
    </NotificationsProvider>
  </MantineProvider>
);
