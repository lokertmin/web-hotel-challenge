export interface Tab {
  link: string;
  label: string;
}

export type TabBarProps = {
  currentLocation: string;
  tabs: Tab[];
};
