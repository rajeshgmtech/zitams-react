import { tabIcons } from "./icons/tabicons";


const Sidebar = ({ isSticky, activeTab, changeRoute }) => {
    const tabs = [
        "HomeDashboard",
        "DataManager",
        "TimeManager",
        "ADP",
        "Country Tab",
        "Site Tab",
        "Door Tab",
        "Department Tab",
        "Employee Tab",


    ];

    return (
        <div className="lg:min-w-[10%] min-w-[21%]  h-screen inline-flex justify-center flex-shrink-0 items-center px-2 md:px-4">
            <div
                className={`
          border-1 border-white flex flex-col items-center py-6 rounded-full shadow-lg fixed w-[58px] sm:w-[64px] lg:w-[80px] bg-white
          transition-all duration-300 ease-in-out
          ${isSticky
                        ? "fixed w-[58px] sm:w-[64px] lg:w-[80px] z-50 "
                        : "relative"}
        `}
            >
                {tabs.map((tab, index) => {
                    const isActive = activeTab === tab;
                    const Icon = tabIcons[tab];

                    return (
                        <button
                            key={tab}
                            onClick={() => changeRoute(tab)}
                            className={`group mb-8 focus:outline-none  last:mb-0`}
                        >
                            {isActive ? (
                                <div className="bg-primary-bg md:w-14 w-10 md:h-14 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                                    <div className="text-white"><Icon className="w-6 h-6" /></div>
                                </div>
                            ) : (
                                <div className="w-7 h-7 text-primary-text group-hover:scale-110 transition">
                                    <Icon className="w-7 h-7" />
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
