import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleButton from "../SimpleButton";

export default {
  title: "SimpleButton",
  component: SimpleButton,
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => (
  <SimpleButton {...args} />
);

export const Outlined = Template.bind({});

Outlined.args = {
  buttonText: "Outlined button",
  variant: "outlined",
  onClickCallback: () => console.log("Outlined button"),
};

export const Contained = Template.bind({});

Contained.args = {
  buttonText: "Contained button",
  variant: "contained",
  onClickCallback: () => console.log("Contained button"),
};
