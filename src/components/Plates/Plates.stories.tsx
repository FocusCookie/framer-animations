import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Plates from "./Plates";

const meta = {
  title: "Example/Plates",
  component: Plates,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="h-screen w-full flex justify-center items-center bg-slate-50">
        {Story()}
      </div>
    ),
  ],
  // args: { onClick: fn() },
} satisfies Meta<typeof Plates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    open: false,
    children: [
      <div className="flex flex-col gap-2" key="1">
        <span className="font-semibold">This is step ☝️</span>
        <p>
          Usually in this step we would explain why this thing exists and what
          it does. Also, we would show a button to go to the next step.
        </p>
      </div>,
      <div className="flex flex-col gap-2" key="2">
        <span className="font-semibold">This is step ✌️</span>
        <p>
          Usually in this step we would explain why this thing exists and what
          it does. Also, we would show a button to go to the next step.
        </p>
        <div className="h-6 rounded w-full animate-pulse bg-neutral-300"></div>
      </div>,
      <div className="flex flex-col gap-2" key="3">
        <span className="font-semibold">This is step ☝️ ✌️</span>
        <p>
          Usually in this step we would explain why this thing exists and what
          it does. Also, we would show a button to go to the next step.
        </p>
        <div className="h-6 rounded w-full animate-pulse bg-neutral-300"></div>
        <div className="h-6 rounded w-1/2 animate-pulse bg-neutral-300"></div>
      </div>,
    ],
    width: "75%",
  },
};
