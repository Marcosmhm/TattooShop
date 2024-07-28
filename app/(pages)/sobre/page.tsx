import Image from "next/image";

export default function Sobre() {
  const aboutParagraphs = [
    {
      key: 1,
      paragraph:
        "Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele. Com mais de 10 anos de experiência no mundo da tatuagem, dedico-me a transformar visões e emoções em arte corporal que expressa quem você é e o que você ama.",
    },
    {
      key: 2,
      paragraph:
        "Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço atentamente os desejos e as histórias de meus clientes para que cada peça seja única e pessoal. Especializo-me em vários estilos, desde o delicado traço fino até composições mais robustas e coloridas, garantindo que cada design não só atenda, mas supere as expectativas.",
    },
    {
      key: 3,
      paragraph:
        "Além da dedicação à arte, a segurança e o conforto são prioridades no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso quanto aos protocolos de higiene e segurança, garantindo uma experiência segura e confortável para todos.",
    },
    {
      key: 4,
      paragraph:
        "Visite meu estúdio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajudá-lo a contar sua história de uma maneira única e eterna. Agende sua consulta e vamos juntos criar algo extraordinário!",
    },
  ];

  const paragraphCards = aboutParagraphs.map((paragraph) => {
    return (
      <p
        key={paragraph.key}
        className="text-text font-light text-left mx-auto mb-8 sm:mx-0"
      >
        {paragraph.paragraph}
      </p>
    );
  });
  return (
    <section className="px-10 lg:px-[140px] xl:flex gap-7">
      <div>
        <h1 className="text-center text-heading font-heading text-2xl mt-[60px] mb-[40px] sm:text-left lg:text-3xl">
          Prazer, sou <span className="text-yellow">Sandro Luz</span>
        </h1>
        {paragraphCards}
        <span className="text-center font-signature font-normal text-4xl sm:text-left mt-12 block">
          Sandro Luz
        </span>
      </div>
      <Image
        priority
        src={"/about-portrait-mobile.png"}
        width={430}
        height={531}
        alt="about portrait"
        className="xl:hidden -mt-6 mx-auto"
      />
      <Image
        priority
        src={"/about-portrait-desktop.png"}
        width={430}
        height={531}
        alt="about portrait"
        className="hidden xl:block w-auto max-h-[750px] -mr-6"
      />
    </section>
  );
}
