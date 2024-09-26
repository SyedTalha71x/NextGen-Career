/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import { Toolbar, Box, styled } from "@mui/material";
import Navbar from "../../Partials/Navbar/page";
import Sidebar from "../../Partials/Sidebar/page";

// Define styled components
const OuterContainer = styled(Box)({
  display: "flex",
  height: "100vh", // Ensure the container fills the entire viewport
  flexDirection: "column",
});

// Define Main component for the content area
const Main = styled(Box)({
  flex: 1,
  padding: "16px", // Consistent padding
  overflowY: "auto", // Enable scrolling for the main content, not the entire page
});

const Page = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  // Handle sidenav type change
  const handleSidenavTypeChange = (type) => {
    setIsTransparent(type === "transparent");
  };

  return (
    <OuterContainer>
      <div className="flex h-full overflow-hidden lg:m-3 md:m-2 sm:m-0 m-0">
        {/* Sidebar */}
        <Sidebar isTransparent={isTransparent} handleSidenavTypeChange={handleSidenavTypeChange} />

        <div className="flex-1 flex flex-col">
          <Navbar />
          <Main>{children}</Main>
        </div>
      </div>
    </OuterContainer>
  );
};

export default Page;
