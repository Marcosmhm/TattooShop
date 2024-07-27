import Image from "next/image";

import NavLinks from "./NavLinks";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-main-bg">
      <div className="px-[50px] pt-10 sm:flex sm:justify-between lg:px-[140px] lg:pt-[61px]">
        <div className="mb-[10px]">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={128} height={78} alt="logo" />
          </Link>
        </div>
        <div>
          <NavLinks />
          <div className="hidden sm:flex sm:ml-auto sm:w-fit text-text-muted sm:items-center sm:gap-x-1">
            <Image
              src={"/whatsapp-logo.svg"}
              width={16}
              height={16}
              alt="WhatsApp logo"
            />
            <span className="text-[12px]">(+55) 11 99999 9999</span>
          </div>
        </div>
      </div>
    </header>
  );
}
