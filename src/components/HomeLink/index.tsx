import Link from "next/Link";
import { Home } from "./styles";

const HomeLink: React.FC = props => {
  return (
    <Link href="/">
      <Home>Wand's Core</Home>
    </Link>
  );
};
export default HomeLink;
