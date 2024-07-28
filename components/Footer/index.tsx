import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-footer-bg text-[14px] text-text-muted mt-7  sm:mt-14 lg:mt-7 h-[78px] ">
      <div className="flex justify-between py-[15px] px-3 sm:px-[50px] lg:pl-[140px] items-center mx-auto max-w-maxWidth lg:justify-normal lg:gap-x-1.5 lg:py-[25px] lg:z-30 lg:relative">
        <div className="capitalize lg:flex lg:justify-between lg:items-center lg:gap-1.5">
          <span>Sandro Luz Tattoo Shop</span>
          <span className="hidden lg:block text-yellow text-xl">&#x2022;</span>
          <span className="block">Rua Limoeiro, 1000- Catalão - SP</span>
        </div>
        <div className="text-yellow text-xl">&#x2022;</div>
        <div className="flex items-center gap-x-1.5">
          <Image
            src={"/whatsapp-logo.svg"}
            width={16}
            height={16}
            alt="WhatsApp logo"
          />
          <span>(+55 11) 9999 9999</span>
        </div>
      </div>
    </footer>
  );
}
