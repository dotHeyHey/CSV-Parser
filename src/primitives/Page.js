import styled from "styled-components";
import { Flex, Box } from "./";

import theme from "../styles/theme";

const Page = styled(Flex)`
  // margin: 0 auto;
  height: 100vh;
  width: 100%;
  // min-height: 100vh !important;
  overflow: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background-color: ${theme.colors.black};
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: ${theme.colors.white};
    /* background: -webkit-linear-gradient(@GALeft 0%, @GARight 82%);
    background: -o-linear-gradient(@GALeft 0%, @GARight 82%);
    background: linear-gradient(@GALeft 0%, @GARight 82%); */
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.black};
  }
`;

Page.displayName = "Page";

Page.defaultProps = {
  flexDirection: "column",
  // justifyContent: 'center',
  alignItems: 'center'
};

export default Page;