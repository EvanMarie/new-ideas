import { useState } from "react";
import {
  Box,
  FlexFull,
  HStackFull,
  VStack,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

type MenuSectionProps = {
  title: string;
  items: { name: string; url: string }[];
};

function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <FlexFull className="px-[1vh] sm:px-[2vh]">
      <VStack align="items-start w-full py-[1vh] border-b-[0.2vh] border-b-slate-800/30 rounded-b-none lg:border-b-transparent">
        <h5 className="font-semibold text-slate-800 pb-[0.5vh] text-sm">
          {title}
        </h5>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="hover:underline text-xs leading-tight"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </VStack>
    </FlexFull>
  );
}

export default function AirbnbFooter() {
  const sections: MenuSectionProps[] = [
    {
      title: "Support",
      items: [
        { name: "Help Center", url: "#" },
        { name: "AirCover", url: "#" },
        { name: "Anti-discrimination", url: "#" },
        { name: "Disability support", url: "#" },
        { name: "Cancellation options", url: "#" },
        { name: "Report neighborhood concern", url: "#" },
      ],
    },
    {
      title: "Hosting",
      items: [
        { name: "Airbnb your home", url: "#" },
        { name: "AirCover for Hosts", url: "#" },
        { name: "Hosting resources", url: "#" },
        { name: "Community forum", url: "#" },
        { name: "Hosting responsibly", url: "#" },
        { name: "Airbnb-friendly apartments", url: "#" },
        { name: "Join a free Hosting class", url: "#" },
      ],
    },
    {
      title: "Airbnb",
      items: [
        { name: "Newsroom", url: "#" },
        { name: "New features", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Investors", url: "#" },
        { name: "Gift cards", url: "#" },
        { name: "Airbnb.org emergency stays", url: "#" },
      ],
    },
  ];

  return (
    <VStackFull className="bg-slate-100 text-slate-600 text-sm mPlus-font lg:px-[1vh]">
      <Inspiration />
      <FlexFull className="flex-col gap-[2vh] lg:flex-row lg:border-b-[0.2vh] lg:border-b-slate-800/30 rounded-b-none px-[1vh] md:px-[2vh]">
        {sections.map((section, index) => (
          <MenuSection key={index} {...section} />
        ))}
      </FlexFull>
      <HStackFull className="px-[2vh] text-center text-xs">
        © 2024 Airbnb, Inc. -{" "}
        <a href="#" className="hover:underline">
          Terms
        </a>{" "}
        -{" "}
        <a href="#" className="hover:underline">
          Sitemap
        </a>{" "}
        -{" "}
        <a href="#" className="hover:underline">
          Privacy
        </a>{" "}
        -{" "}
        <a href="#" className="hover:underline">
          Your Privacy Choices
        </a>
      </HStackFull>
    </VStackFull>
  );
}

function Inspiration() {
  const [activeTab, setActiveTab] = useState<string>("Popular");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <VStackFull className="px-[1vh] md:px-[2vh]">
      <FlexFull>
        <Text className="text-lg text-slate-800 font-semibold px-[1vh] pt-[1vh]">
          Inspiration for future getaways
        </Text>
      </FlexFull>
      <FlexFull>
        <Box className="w-full overflow-x-auto hide-scrollbar">
          <HStackFull className="w-fit" gap="gap-[0px]">
            {inspirationObjects.map((tab, index) => (
              <div
                key={index}
                className={`text-nowrap text-sm  cursor-pointer rounded-b-none px-[2vh] py-[1vh] transition-400 ${
                  activeTab === tab.heading
                    ? "text-pink-500 border-b-[0.3vh] border-pink-600"
                    : "text-gray-500 hover:text-gray-700 border-b-[0.1vh] border-slate-800/40"
                }`}
                onClick={() => handleTabClick(tab.heading)}
              >
                {tab.heading}
              </div>
            ))}
          </HStackFull>
        </Box>
      </FlexFull>
      <Wrap className="w-full border-b-[0.2vh] rounded-b-none border-b-slate-800/40">
        {inspirationObjects
          .find((obj) => obj.heading === activeTab)
          ?.items.map((item, index) => (
            <VStack
              key={index}
              gap="gap-[0px]"
              className="text-xs text-slate-900 px-[2vh] py-[1vh]"
              align="items-start"
            >
              <Text className="font-bold text-slate-500 leading-tight">
                {item.name}
              </Text>
              {item.tagline && (
                <Text className="text-xs text-slate-500 leading-tight">
                  {item.tagline}
                </Text>
              )}
            </VStack>
          ))}
      </Wrap>
    </VStackFull>
  );
}

const inspirationObjects = [
  {
    heading: "Popular",
    items: [
      { name: "Canmore", tagline: "Condo rentals" },
      { name: "Benalmádena", tagline: "Vacation rentals" },
      { name: "Tucson", tagline: "Mansion rentals" },
      { name: "Jasper", tagline: "Cabin rentals" },
      { name: "Anaheim", tagline: "Apartment rentals" },
      { name: "Monterey", tagline: "Vacation rentals" },
      { name: "Marbella", tagline: "Vacation rentals" },
      { name: "Mijas", tagline: "Vacation rentals" },
      { name: "Mountain View", tagline: "House rentals" },
      { name: "Devonport", tagline: "Vacation rentals" },
      { name: "Paso Robles", tagline: "Cottage rentals" },
      { name: "Santa Barbara", tagline: "Condo rentals" },
      { name: "Sonoma", tagline: "Vacation rentals" },
      { name: "Prescott", tagline: "Vacation rentals" },
      { name: "Scottsdale", tagline: "House rentals" },
      { name: "Ibiza", tagline: "Apartment rentals" },
    ],
  },
  {
    heading: "Arts & Culture",
    items: [
      { name: "Phoenix", tagline: "Apartment rentals" },
      { name: "Hot Springs", tagline: "Condo rentals" },
      { name: "Prague", tagline: "Vacation rentals" },
      { name: "Washington", tagline: "House rentals" },
      { name: "York", tagline: "Cottage rentals" },
      { name: "Paris", tagline: "Cottage rentals" },
      { name: "Los Angeles", tagline: "Rentals with pools" },
      { name: "San Diego", tagline: "Vacation rentals" },
      { name: "San Francisco", tagline: "Vacation rentals" },
      { name: "Barcelona", tagline: "Apartment rentals" },
      { name: "Keswick", tagline: "Vacation rentals" },
      { name: "London", tagline: "House rentals" },
      { name: "Rhodes", tagline: "Cottage rentals" },
      { name: "Nashville", tagline: "Vacation rentals" },
      { name: "Dublin", tagline: "Apartment rentals" },
      { name: "Scarborough", tagline: "Vacation rentals" },
      { name: "Sherwood Forest", tagline: "Vacation rentals" },
    ],
  },
  {
    heading: "Outdoors",
    items: [
      { name: "Lake Martin", tagline: "Condo rentals" },
      { name: "Banff", tagline: "Condo rentals" },
      { name: "North Rim", tagline: "Vacation rentals" },
      { name: "Payson", tagline: "Cabin rentals" },
      { name: "Emerald Lake", tagline: "Vacation rentals" },
      { name: "Vancouver Island", tagline: "Vacation rentals" },
      { name: "Nerja", tagline: "Beach house rentals" },
      { name: "Pinetop-Lakeside", tagline: "Vacation rentals" },
      { name: "Victoria", tagline: "House rentals" },
      { name: "Greer", tagline: "Cabin rentals" },
      { name: "Red Rock", tagline: "Cabin rentals" },
      { name: "Dinner Plain", tagline: "Pet-friendly rentals" },
      { name: "Idyllwild-Pine Cove", tagline: "House rentals" },
      { name: "Mammoth Lakes", tagline: "Vacation rentals" },
      { name: "Lake Havasu City", tagline: "Vacation rentals" },
      { name: "Lake Powell", tagline: "Vacation rentals" },
      { name: "Streaky Bay", tagline: "Vacation rentals" },
    ],
  },
  {
    heading: "Mountains",
    items: [
      { name: "Mentone", tagline: "Vacation rentals" },
      { name: "Sedona", tagline: "Pet-friendly rentals" },
      { name: "Blue Mountains", tagline: "Vacation rentals" },
      { name: "Asheville", tagline: "Cabin rentals" },
      { name: "Townsend", tagline: "Cabin rentals" },
      { name: "Wears Valley", tagline: "Vacation rentals" },
      { name: "Helen", tagline: "Chalet rentals" },
      { name: "Blowing Rock", tagline: "Cottage rentals" },
      { name: "Cabins", tagline: "Vacation rentals" },
      { name: "Pine Mountain", tagline: "Cabin rentals" },
      { name: "Stone Mountain", tagline: "Cabin rentals" },
      { name: "Boone", tagline: "Vacation rentals" },
      { name: "Hochatown", tagline: "Cabin rentals" },
      { name: "Island Park", tagline: "Vacation rentals" },
      { name: "Pigeon Forge", tagline: "Vacation rentals" },
    ],
  },
  {
    heading: "Beach",
    items: [
      { name: "Dauphin Island", tagline: "Vacation rentals" },
      { name: "Fort Morgan", tagline: "Beach house rentals" },
      { name: "Hamilton Island", tagline: "Vacation rentals" },
      { name: "Lancelin", tagline: "Vacation rentals" },
      { name: "Big Sur", tagline: "Vacation rentals" },
      { name: "Bodega Bay", tagline: "Vacation rentals" },
      { name: "Gulf Shores", tagline: "Vacation rentals" },
      { name: "Melbourne Beach", tagline: "Beach house rentals" },
      { name: "Cambria", tagline: "Cabin rentals" },
      { name: "Cayucos", tagline: "Vacation rentals" },
      { name: "Bruny Island", tagline: "Vacation rentals" },
      { name: "Crescent Head", tagline: "Vacation rentals" },
      { name: "Moonta Bay", tagline: "Vacation rentals" },
      { name: "Ocean Grove", tagline: "Beach house rentals" },
      { name: "Huntington Beach", tagline: "Vacation rentals" },
      { name: "Gerringong", tagline: "Vacation rentals" },
      { name: "Majorca", tagline: "Rentals with pools" },
    ],
  },
  {
    heading: "Unique Stays",
    items: [
      { name: "Cabins", tagline: "United States" },
      { name: "Treehouses", tagline: "United States" },
      { name: "Lakehouses", tagline: "United States" },
      { name: "Yurt Rentals", tagline: "United States" },
      { name: "Private Island Rentals", tagline: "United States" },
      { name: "Farm Houses", tagline: "United States" },
      { name: "Glamping", tagline: "United States" },
      { name: "Tiny Houses", tagline: "United States" },
      { name: "Beach Houses", tagline: "United States" },
      { name: "Castle Rentals", tagline: "United States" },
      { name: "Houseboats", tagline: "United States" },
      { name: "Campers and RVs", tagline: "United States" },
      { name: "Yurt Rentals", tagline: "United Kingdom" },
      { name: "Farm Cottages", tagline: "United Kingdom" },
      { name: "Cabin Rentals", tagline: "Australia" },
      { name: "Luxury Cabins", tagline: "United Kingdom" },
      { name: "Holiday Caravans", tagline: "United Kingdom" },
    ],
  },
  {
    heading: "Categories",
    items: [
      { name: "Amazing pools", tagline: "" },
      { name: "Arctic", tagline: "" },
      { name: "Countryside", tagline: "" },
      { name: "Design", tagline: "" },
      { name: "OMG!", tagline: "" },
      { name: "Tiny homes", tagline: "" },
      { name: "Camping", tagline: "" },
      { name: "Earth homes", tagline: "" },
      { name: "Towers", tagline: "" },
      { name: "Campers", tagline: "" },
      { name: "Castles", tagline: "" },
      { name: "Farms", tagline: "" },
      { name: "National parks", tagline: "" },
      { name: "Windmills", tagline: "" },
      { name: "Luxe", tagline: "" },
      { name: "Containers", tagline: "" },
      { name: "Vineyards", tagline: "" },
    ],
  },

  {
    heading: "Things to Do",
    items: [
      { name: "London", tagline: "England" },
      { name: "Paris", tagline: "Île-de-France" },
      { name: "Amsterdam", tagline: "North Holland" },
      { name: "Miami", tagline: "Florida" },
      { name: "Tokyo", tagline: "Tokyo" },
      { name: "Vienna", tagline: "Vienna" },
      { name: "New York", tagline: "New York" },
      { name: "Madrid", tagline: "Community of Madrid" },
      { name: "Barcelona", tagline: "Catalonia" },
      { name: "Istanbul", tagline: "Istanbul" },
      { name: "Los Angeles", tagline: "California" },
      { name: "Rome", tagline: "Lazio" },
      { name: "Athens", tagline: "Greece" },
      { name: "Prague", tagline: "Czechia" },
      { name: "Orlando", tagline: "Florida" },
      { name: "Bali", tagline: "Indonesia" },
      { name: "Lisbon", tagline: "Lisbon" },
    ],
  },
  {
    heading: "Travel Tips & Inspiration",
    items: [
      { name: "Family travel hub", tagline: "Tips and inspiration" },
      { name: "Family budget travel", tagline: "Get there for less" },
      {
        name: "Vacation ideas for any budget",
        tagline: "Make it special without making it spendy",
      },
      {
        name: "Travel Europe on a budget",
        tagline: "How to take the kids to Europe for less",
      },
      { name: "Outdoor adventure", tagline: "Explore nature with the family" },
      {
        name: "Kid-friendly state parks",
        tagline: "Check out these family-friendly hikes",
      },
      {
        name: "Bucket list national parks",
        tagline: "Must-see parks for family travel",
      },
    ],
  },
  {
    heading: "Airbnb-Friendly Apartments",
    items: [
      { name: "Atlanta Metro", tagline: "Georgia" },
      { name: "Augusta", tagline: "Georgia" },
      { name: "Charlotte", tagline: "North Carolina" },
      { name: "Cincinnati", tagline: "Ohio" },
      { name: "Gainesville", tagline: "Florida" },
      { name: "Hoboken", tagline: "New Jersey" },
      { name: "Austin Metro", tagline: "Texas" },
      { name: "Cleveland", tagline: "Ohio" },
      { name: "Houston Metro", tagline: "Texas" },
      { name: "Birmingham", tagline: "Alabama" },
      { name: "Boston Metro", tagline: "Massachusetts" },
      { name: "Columbus", tagline: "Ohio" },
      { name: "Dallas", tagline: "Texas" },
      { name: "Indianapolis", tagline: "Indiana" },
      { name: "Jacksonville", tagline: "Florida" },
      { name: "Denver", tagline: "Colorado" },
      { name: "Boulder", tagline: "Colorado" },
    ],
  },
];
