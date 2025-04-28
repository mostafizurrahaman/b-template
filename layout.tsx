// import Banner from "@/components/Banner";

import { ReactNode } from "react";
import "@/blog-styles/style.scss";
import "@/scssStyles/global.css";
import { cn } from "./_libs/utils";
const TrimukBlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn("blog-layout-custom-style")}>
      {children}
      {/* <Banner /> */}
    </div>
  );
};

export default TrimukBlogLayout;
