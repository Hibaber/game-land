import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../hooks/useGames";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}
const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string] } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;