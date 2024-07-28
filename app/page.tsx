import Image from "next/image";

export default function Home() {
  return (
    <section className="relative  h-[70vh]">
      <Image
        priority
        quality={100}
        src={"/portrait-mobile.png"}
        width={500}
        height={1000}
        alt="portrait mobile"
        className="absolute top-0 right-0 z10 h-[645px] w-auto lg:hidden sm:h-[670px]"
      />
      <Image
        priority
        quality={100}
        src={"/portrait-desktop.png"}
        width={500}
        height={1000}
        alt="portrait desktop"
        className="absolute hidden -top-4 right-[6.75rem] z-10 max-h-[831px] w-auto lg:block"
      />
      <div className="hidden lg:block absolute left-20 -top-12 font-londrina uppercase font-normal text-text-muted opacity-15 text-[270px] tracking-wide z-0">
        Tattoo
      </div>
      <div>
        <h1 className="relative uppercase z-20 text-text-muted font-heading pt-[150px] pl-10 text-5xl leading-[1] break-keep lg:text-7xl lg:pl-[140px]">
          <span>Inspire-se</span>
          <span className="block">Expresse-se</span>
          <span className="text-yellow block">Tatue-se</span>
        </h1>
      </div>
    </section>
  );
}
