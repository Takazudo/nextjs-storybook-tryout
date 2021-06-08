import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
  title: "MyComponents/Button",
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  href: 'https://example.com',
  label: 'My Button!',
};
