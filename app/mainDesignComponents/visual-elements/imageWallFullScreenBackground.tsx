import {
  Box,
  FlexFull,
  Transition,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { motion } from "framer-motion";

export default function ImageWallFullScreenBackground({
  images,
  overlay = "bg-violet-300/70 bg-gradient-to-r from-indigo-900/50 via-indigo-950/70 to-indigo-900/50",
  overflow = "overflow-y-auto",
}: {
  images: string[];
  overlay?: string;
  overflow?: string;
}) {
  return (
    <Transition className="fixed inset-0 h-100svh w-full">
      <Wrap
        className={`w-100vw h-100svh overflow-hidden border-none bg-slate-900/60`}
      >
        {images.map((image, index) => (
          <Box
            key={`${index}-${image}`}
            className={`rounded-none w-50% md:w-33% lg:w-25% xl:w-20% xxl:w-16.6% h-16.6% sm:h-25% md:h-20%`}
          >
            <motion.div key={image} className="w-full h-full relative bg-black">
              <img
                src={image}
                alt={`Descriptive text for image ${index}`}
                className="w-full h-full object-cover rounded-none"
              />
            </motion.div>
          </Box>
        ))}
      </Wrap>
      <FlexFull
        className={`justify-center h-100svh items-center fixed ${overflow} ${overlay} text-transparent`}
        style={{ zIndex: 5 }}
      >
        This
      </FlexFull>
    </Transition>
  );
}
