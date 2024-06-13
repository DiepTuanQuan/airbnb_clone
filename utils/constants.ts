import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Bãi biển",
    icon: TbBeach,
    description: "",
  },
  {
    label: "Cối xay gió",
    icon: GiWindmill,
    description: "",
  },
  {
    label: "Hiện đại",
    icon: MdOutlineVilla,
    description: "",
  },
  {
    label: "Miền quê",
    icon: TbMountain,
    description: "",
  },
  {
    label: "Hồ boơi",
    icon: TbPool,
    description: "",
  },
  {
    label: "Đảo",
    icon: GiIsland,
    description: "",
  },
  {
    label: "Hồ",
    icon: GiBoatFishing,
    description: "",
  },
  {
    label: "Trượt tuyết",
    icon: FaSkiing,
    description: "",
  },
  {
    label: "Lâu đài",
    icon: GiCastle,
    description: "",
  },
  {
    label: "Hang động",
    icon: GiCaveEntrance,
    description: "",
  },
  {
    label: "Cắm trại",
    icon: GiForestCamp,
    description: "",
  },
  {
    label: "Bắc cực",
    icon: BsSnow,
    description: "",
  },
  {
    label: "Sa mạc",
    icon: GiCactus,
    description: "",
  },
  {
    label: "Nông trại",
    icon: GiBarn,
    description: "",
  },
  {
    label: "Sang trọng",
    icon: IoDiamond,
    description: "",
  },
];

export const LISTINGS_BATCH = 16;

export const menuItems = [
  {
    label: "My trips",
    path: "/trips",
  },
  {
    label: "My favorites",
    path: "/favorites",
  },
  {
    label: "My reservations",
    path: "/reservations",
  },
  {
    label: "My properties",
    path: "/properties",
  },
];
