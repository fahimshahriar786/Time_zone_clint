import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClockLoader";

const override = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
  margin-top: 20%;
`;

const useLoading = () => {
  return <ClimbingBoxLoader color="#20312d" css={override} size={200} />;
};

export default useLoading;
