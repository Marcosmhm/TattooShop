import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <section className="relative flex px-10 justify-between lg:px-[140px]">
      <div className="relative z-10">
        <h1 className="font-heading text-heading text-center mt-[60px] mb-[40px] text-2xl sm:mx-0 sm:text-left lg:text-3xl">
          Entre em <span className="text-yellow">Contato</span>
        </h1>
        <h2 className="max-w-[400px] mx-auto text-center font-light mb-10 sm:mx-0 sm:text-left">
          Clique no botão abaixo e envie uma mensagem. Vamos conversar!
        </h2>
        <Link
          href={"https://wa.me/5511999999999"}
          target="_blank"
          className="text-center flex items-center gap-7 mx-auto max-w-fit px-8 py-4 bg-[#494949] rounded-md sm:mx-0 sm:text-left"
        >
          <Image
            src={"/whatsapp-logo-white.svg"}
            width={36}
            height={36}
            alt="whatsapp logo"
          />
          <div>
            <span className="font-medium text-heading">Enviar Whatsapp</span>
            <span className="text-text-muted block text-xs">
              (+55 11)99711 1111
            </span>
          </div>
        </Link>
      </div>
      <Image
        priority
        src={"/contact-bg.png"}
        width={1000}
        height={1000}
        alt="a tattoo artist making a tattoo"
        className="absolute top-0 right-0 hidden max-w-[60%] h-[auto] md:block"
      />
    </section>
  );
}
