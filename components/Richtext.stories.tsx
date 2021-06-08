import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Richtext, IRichtextProps } from "./Richtext";

export default {
  title: "MyComponents/Richtext",
  component: Richtext,
} as Meta;

const Template: Story<IRichtextProps> = (args) => <Richtext {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  html: `
<h2>Heading Lv2</h2>
<p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
<h3>Heading Lv3</h3>
<p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
<ul>
  <li>The quick brown fox jumps over the lazy dog. </li>
  <li>The quick brown fox jumps over the lazy dog. </li>
  <li>The quick brown fox jumps over the lazy dog. </li>
</ul>
<p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
<h3>Heading Lv3</h3>
<p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
<p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
  `
};
