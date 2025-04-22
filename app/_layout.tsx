import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
   <Stack.Screem
    name="index"
    options={{ titile: "Home"}}
    />
  </Stack>
  )
};
