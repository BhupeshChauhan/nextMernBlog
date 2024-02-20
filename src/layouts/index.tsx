"use client";
import React from "react";
import FullLayout from "./full/FullLayout";
import SnackBarComponent from "@/ui/SnackBarComponent";
import AuthProvider from "@/utils/AuthProvider";
import { GlobalContextProvider } from "@/context/GlobalContext";

interface Props {
  children: React.ReactNode;
  type: string;
}

const Layout: React.FC<Props> = ({ children, type }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <AuthProvider>
      <GlobalContextProvider>
        {type === "Full" && (
          <>
            {/* {loading && <LoadingSpinner />} */}
            <FullLayout>{children}</FullLayout>
          </>
        )}
        <SnackBarComponent />
      </GlobalContextProvider>
    </AuthProvider>
  );
};

export default Layout;
