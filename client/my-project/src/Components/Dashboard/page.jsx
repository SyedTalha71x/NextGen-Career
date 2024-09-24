import { ReactNode } from "react";
import { Toolbar, Box, styled } from "@mui/material";
import Navbar from "../../Partials/Navbar/page";
import Sidebar from "../../Partials/Sidebar/page";

// Define styled components
const OuterContainer = styled(Box)({
  display: "flex",
  height: "100vh", // Ensure the container fills the entire viewport
  flexDirection: "column",
});

const InnerContainer = styled(Box)({
  display: "flex",
  flex: 1,
  overflow: "hidden", // Prevent overflow issues
});

// Define Main component for the content area
const Main = styled(Box)({
  flex: 1,
  padding: "16px", // Consistent padding
  overflowY: "auto", // Enable scrolling for the main content, not the entire page
});

const Page = ({ children }) => {
  return (
    <OuterContainer>
      <div className="flex h-full overflow-hidden lg:m-3 md:m-2 sm:m-0 m-0">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />
          <Main>{children}</Main>
        </div>
      </div>
    </OuterContainer>
  );
};

export default Page;
