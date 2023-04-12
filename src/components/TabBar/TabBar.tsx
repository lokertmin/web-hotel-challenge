import { FC } from "react";
import { Link } from "react-router-dom";
import { Tab, TabBarProps } from "../../types/tabTypes";

const TabBar: FC<TabBarProps> = ({ currentLocation, tabs }) => {
  const isSelected = (tab: Tab) => tab.link === currentLocation;
  const renderTab = (tab: Tab) => {
    const selectedStyle =
      "text-white py-4 px-6 block hover:text-white focus:outline-none text-white border-b-2 font-medium border-white";
    const defaultStyle =
      "text-white py-4 px-6 block hover:text-white focus:outline-none";

    return (
      <Link key={tab.link} to={tab.link} data-testid={tab.link}>
        <div className={isSelected(tab) ? selectedStyle : defaultStyle}>
          {tab.label}
        </div>
      </Link>
    );
  };

  return (
    <div className="bg-black">
      <nav className="flex flex-col sm:flex-row">
        {tabs.map((tab) => renderTab(tab))}
      </nav>
    </div>
  );
};

export default TabBar;
