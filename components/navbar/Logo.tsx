import Link from "next/link";
import { Button } from "../ui/button";
import { LuArmchair } from "react-icons/lu";
import { VscCode } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <VscAccount className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
