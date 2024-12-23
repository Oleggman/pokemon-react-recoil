import { StyledLoader } from "./Loader.styled";
import { Hourglass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <StyledLoader>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </StyledLoader>
  );
}