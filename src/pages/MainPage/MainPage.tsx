import { useLocation, Outlet } from "react-router-dom";
import { useGetClientsQuery } from "../../store/domain";
import { TabBar } from "../../components";
import { availableTabs } from "../../constants";

const MainPage = () => {
  const location = useLocation();
  useGetClientsQuery();

  return (
    <>
      <TabBar tabs={availableTabs} currentLocation={location.pathname} />
      <Outlet />
    </>
  );
};

export default MainPage;
