import Divider from "~/buildingBlockComponents/divider";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    name: "Classic Pancakes",
    category: "Breakfast",
    description: "Fluffy pancakes served with maple syrup and butter.",
    price: "$8.99",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/pancakes.webp",
  },
  {
    name: "Avocado Toast",
    category: "Breakfast",
    description:
      "Toasted sourdough with smashed avocado, cherry tomatoes, and a poached egg.",
    price: "$10.99",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/avocadoToast.webp",
  },
  {
    name: "Breakfast Burrito",
    category: "Breakfast",
    description:
      "A large tortilla filled with scrambled eggs, bacon, cheese, and salsa.",
    price: "$9.99",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/breakfastburrito.webp",
  },

  {
    name: "Americano",
    category: "Beverages",
    description: "Espresso with hot water.",
    price: "$3.00",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/americano.webp",
  },
  {
    name: "Cappuccino",
    category: "Beverages",
    description: "Espresso with steamed milk and a layer of foam.",
    price: "$4.00",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/cappuccino.webp",
  },
  {
    name: "Matcha Latte",
    category: "Beverages",
    description: "A creamy blend of matcha and steamed milk.",
    price: "$4.50",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/matchaLatte.webp",
  },

  {
    name: "Croissant",
    category: "Pastries",
    description: "Buttery and flaky croissant.",
    price: "$3.50",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/croissant.webp",
  },
  {
    name: "Blueberry Muffin",
    category: "Pastries",
    description: "Freshly baked muffin filled with blueberries.",
    price: "$3.00",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/muffin.webp",
  },
  {
    name: "Chocolate Chip Cookie",
    category: "Pastries",
    description: "Classic cookie with rich chocolate chips.",
    price: "$2.50",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/chocolateChipCookie.webp",
  },
];

export default function BlogPDFRenderingMenuExample() {
  function MenuItem({ item, index }: { item: MenuItem; index: number }) {
    return (
      <VStackFull gap="gap-[2vh]">
        <FlexFull className="flex-col md:flex-row gap-[2vh]">
          <FlexFull
            className={`justify-center ${
              index === 0 || index % 2 === 0 ? "hidden" : "flex"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="border-900-md shadowNarrowLoose"
            />
          </FlexFull>
          <VStackFull className="h-full justify-center md:gap-[2vh] md:px-[3vh] lg:px-[1vh] xl:px-[3vh]">
            <FlexFull className="justify-between md:flex-col md:gap-[2vh]">
              <span className="text-xl text-yellow-200">{item.name}</span>
              <span className="text-yellow-100 text-xl ">{item.price}</span>
            </FlexFull>
            <FlexFull>
              <span className="text-yellow-100 leading-normal text-xl ">
                {item.description}
              </span>
            </FlexFull>
          </VStackFull>
          <FlexFull
            className={`justify-center ${
              index === 0 || index % 2 === 0 ? "flex" : "hidden"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="border-900-md shadowNarrowLoose"
            />
          </FlexFull>
        </FlexFull>
        <Divider bg="bg-amber-200" m="my-[2vh]" />
      </VStackFull>
    );
  }
  return (
    <FlexFull className="justify-center">
      <VStackFull
        className="p-[2vh] bg-stone-800 bg-gradient-to-b from-neutral-800/40 via-amber-800/40 to-neutral-800/40 border-yellow-200 border-[0.1vh] shadowNarrowLoose md:w-95% lg:w-100% xl:w-95% xxl:w-90%"
        gap="gap-[4vh]"
      >
        <VStackFull className="justify-center items-center">
          <img
            src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/whisperingbeans.webp"
            alt="Whispering Beans Café"
            className="border-900-md shadowNarrowLoose"
          />
          <Divider bg="bg-amber-200" m="my-[2vh]" />
        </VStackFull>

        <VStackFull>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} index={index} />
          ))}
        </VStackFull>
      </VStackFull>
    </FlexFull>
  );
}
