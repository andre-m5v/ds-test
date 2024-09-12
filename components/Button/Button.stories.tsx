import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    theme: "primary",
    size: "regular",
    children: "Button text",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    size: "regular",
    children: "Button text",
  },
};

// const buttonThemes = ["primary", "secondary"] as const;

// export const AllStyles = () => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gap: 20,
//         placeContent: "center",
//         placeItems: "center",
//         gridTemplateColumns: "1fr 1fr",
//         width: 520,
//       }}
//     >
//       {buttonThemes.map((theme) => (
//         <div
//           style={{
//             display: "grid",
//             gap: 20,
//             placeContent: "center",
//             placeItems: "center",
//             gridTemplateColumns: "1fr",
//           }}
//           key={theme}
//         >
//           <Button size="small" theme={theme}>
//             Button text
//           </Button>
//           <Button size="small" theme={theme} disabled>
//             Button text
//           </Button>
//           <Button size="regular" theme={theme}>
//             Button text
//           </Button>
//           <Button size="regular" theme={theme}>
//             Button text <IconPlus style={{ width: 16 }} />
//           </Button>
//           <Button size="regular" theme={theme}>
//             <IconPlus style={{ width: 16 }} /> Button text
//           </Button>
//           <Button size="regular" theme={theme} disabled>
//             Button text
//           </Button>
//           <Button size="icon" theme={theme}>
//             <IconPlus style={{ width: 16 }} />
//           </Button>
//           <Button size="icon" theme={theme} disabled>
//             <IconPlus style={{ width: 16 }} />
//           </Button>
//         </div>
//       ))}
//     </div>
//   );
// };
