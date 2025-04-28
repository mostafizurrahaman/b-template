import { ReactNode } from "react";
// import "@/scssStyles/style.scss";
// import "@/scssStyles/global.css";
import { cn } from "../_libs/utils";
const DynamicLayout = ({ children }: { children: ReactNode }) => {
  return <div className={cn("blog-layout-custom-style")}>{children}</div>;
};

export default DynamicLayout;
