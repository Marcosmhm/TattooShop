export default function Servicos() {
  const servicos = [
    {
      titulo: "Tatuagens Personalizadas",
      texto:
        "Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos.",
    },
    {
      titulo: "Cover-Up",
      texto:
        "Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original.",
    },
    {
      titulo: "Restauração",
      texto:
        "Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez.",
    },
    {
      titulo: "Henna",
      texto:
        "Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses.",
    },
  ];

  const servicoCards = servicos.map((servico) => {
    return (
      <div key={servico.titulo} className=" sm:text-left">
        <h3 className="font-heading text-heading text-lg">{servico.titulo}</h3>
        <p className="max-w-[230px] mt-[10px] mb-[20px] text-text opacity-80 text-sm font-extralight ">
          {servico.texto}
        </p>
      </div>
    );
  });

  return (
    <section className="text-center sm:text-left sm:px-[50px] lg:px-[140px]">
      <h1 className="text-yellow font-heading mt-[60px] mb-[40px] text-2xl">
        Serviços
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] gap-6 break-keep justify-items-center sm:justify-items-start">
        {servicoCards}
      </div>
    </section>
  );
}
