import React from "react";

import LoginForm from "./LoginForm";

export default {
  title: "Mantine/LoginForm",
  component: LoginForm,
  argTypes: {
	onSubmit: { action: 'submitted' },
  },
};

const Template = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
