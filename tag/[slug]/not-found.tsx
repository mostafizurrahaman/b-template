import Image from "next/image";
import React from "react";

import img from "../../__assets/not-found.svg";
import { Typography } from "../../__components/ui/Typography";
import { blogFontConfig } from "../../__configs/font";

const Page = () => {
   return (
      <main className="flex h-screen flex-col items-center justify-center gap-4 px-5 md:px-8">
         <Image src={img} alt="image" />
         <Typography
            variant="Medium_H2"
            className={`${blogFontConfig.title} block text-dark_blue_`}
         >
            Tag Not Found
         </Typography>
         <Typography variant="Regular_H5" className="mt-6">
            The tag you are looking for does not exist. Please check the URL or
            try another tag.
         </Typography>
      </main>
   );
};

export default Page;
