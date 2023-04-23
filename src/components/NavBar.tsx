import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SeacrhInput from "./SeacrhInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SeacrhInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
