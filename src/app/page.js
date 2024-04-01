import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Cool Zone v1 || Cool Zone - (Slogan) NextJS Template",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
