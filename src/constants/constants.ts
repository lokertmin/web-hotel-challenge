import { Tab } from "../types/tabTypes";

export const ROUTES = {
  HOME: "/",
  FLOOR: "/floor",
  FIRST_FLOOR: "/floor/1",
  SECOND_FLOOR: "/floor/2",
  THIRD_FLOOR: "/floor/3",
  FOURTH_FLOOR: "/floor/4",
};

export const availableTabs: Tab[] = [
  {
    link: ROUTES.FIRST_FLOOR,
    label: "First Floor",
  },
  {
    link: ROUTES.SECOND_FLOOR,
    label: "Second Floor",
  },
  {
    link: ROUTES.THIRD_FLOOR,
    label: "Third Floor",
  },
  {
    link: ROUTES.FOURTH_FLOOR,
    label: "Fourth Floor",
  },
];

export const serviceURL = "https://gist.github.com/";
