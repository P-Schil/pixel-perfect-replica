import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, PawPrint, Scissors, Stethoscope, ShoppingBag, Truck } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const wa = "https://wa.me/5534996520992";

const services = [
  [Scissors, "Banho e tosa", "Higiene, conforto e cuidado para o seu pet."],
  [ShoppingBag, "Produtos", "Produtos para cães e gatos em um só lugar."],
  [Stethoscope, "Clínica veterinária", "Atendimento clínico com orientação profissional."],
  [Stethoscope, "Dermatologia", "Avaliação especializada para pele e pelos."],
  [Truck, "Táxi Dog", "Transporte do seu pet com praticidade e cuidado."],
  [PawPrint, "Cuidado completo", "Serviços integrados para o bem-estar animal."],
] as const;

function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e24480] text-white"><PawPrint /></span>
            <span><b className="block text-xs uppercase tracking-widest text-[#e24480]">Pet Shop e Clínica</b><b className="text-lg">Vida Animal</b></span>
          </a>
          <nav className="hidden gap-6 md:flex"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a><a href="#depoimentos">Depoimentos</a></nav>
          <a href={wa} className="hidden rounded-full bg-[#e24480] px-5 py-3 text-sm font-bold text-white md:inline-flex">Quero Tirar Dúvidas</a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[680px] overflow-hidden bg-slate-950">
        <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=2200&q=85" alt="Cão em atendimento profissional" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20">
          <div className="max-w-4xl text-white">
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">Cuidado animal completo</span>
            <h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">Cuidado profissional para quem trata seu pet como parte da família.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Atendimento especializado, estrutura completa e orientação clara para a saúde e o bem-estar do seu companheiro.</p>
            <a href={wa} className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#e24480] px-7 py-4 font-black text-white shadow-lg">Quero Falar com Especialista <MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-kicker">Sobre nós</span>
            <h2 className="section-title mt-4">Cuidado, confiança e qualidade em cada atendimento.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">O Vida Animal reúne serviços de pet shop e atendimento veterinário para tornar o cuidado com os pets mais completo, próximo e profissional.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Nosso diferencial é unir carinho pelos animais, profissionais especializados e uma estrutura voltada ao conforto e à segurança.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80" alt="Profissional veterinário cuidando de um cão" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
        </div>
      </section>

      <section id="servicos" className="bg-slate-50 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><span className="section-kicker">Serviços e soluções</span><h2 className="section-title mt-4">Tudo para cuidar melhor do seu pet.</h2><p className="mt-5 text-lg text-slate-600">Qualidade, segurança e praticidade em um só lugar.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, title, description]) => (
              <article key={title} className="flex h-full flex-col rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-50 text-[#e24480]"><Icon /></span>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
                <a href={wa} className="mt-6 inline-flex w-fit rounded-xl bg-black px-4 py-3 text-sm font-bold text-white">Quero Agendar uma Consulta</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="mx-auto max-w-7xl px-5 py-24">
        <span className="section-kicker">Diferenciais competitivos</span>
        <h2 className="section-title mt-4">Profissionalismo sem perder o carinho.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Atendimento personalizado com foco em resultados e expertise especializada.","Qualidade técnica e compromisso ético.","Orientação clara para os tutores.","Estrutura completa para diferentes necessidades.","Contato direto para dúvidas e agendamentos.","Relacionamento duradouro baseado em confiança."].map((text) => <div key={text} className="rounded-3xl border p-6"><PawPrint className="text-[#e24480]" /><p className="mt-4 font-semibold">{text}</p></div>)}
        </div>
      </section>

      <section id="depoimentos" className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-kicker">Depoimentos e prova social</span>
          <h2 className="mt-5 text-4xl font-black">A confiança de quem escolhe cuidar.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">Área preparada para receber depoimentos reais e autorizados de clientes. Evitamos criar avaliações fictícias.</p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8"><p className="text-lg font-semibold">“Depoimento real do cliente a inserir aqui.”</p><p className="mt-3 text-sm text-slate-400">Nome e perfil do cliente</p></div>
        </div>
      </section>

      <section id="contato" className="bg-[#e24480] px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl"><h2 className="text-4xl font-black sm:text-5xl">Seu pet merece cuidado profissional, próximo e responsável.</h2><p className="mx-auto mt-5 max-w-2xl text-white/90">Tire dúvidas, conheça nossos serviços ou agende seu atendimento pelo WhatsApp.</p><a href={wa} className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 font-black text-white">Quero Falar com Especialista <MessageCircle /></a></div>
      </section>

      <footer className="bg-black px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div><b className="text-xl">Pet Shop e Clínica Vida Animal</b><p className="mt-4 text-sm text-slate-400">Carinho, cuidado e qualidade para o seu pet.</p><a href="https://www.instagram.com/vidaanimal.udi" className="mt-4 inline-flex gap-2 text-sm"><Instagram className="h-4 w-4"/>@vidaanimal.udi</a></div>
          <div><b>Atendimento</b><p className="mt-4 text-sm leading-6 text-slate-400"><MapPin className="mr-2 inline h-4 w-4"/>Av. Belarmino Cotta Pacheco, 1600 - Santa Mônica, Uberlândia - MG, 38408-168</p><p className="mt-3 text-sm text-slate-400"><Clock3 className="mr-2 inline h-4 w-4"/>Seg. a sex. 8h15 às 18h; sáb. 8h15 às 13h</p></div>
          <div><b>Contato</b><p className="mt-4 text-sm text-slate-400"><Phone className="mr-2 inline h-4 w-4"/>(34) 99652-0992</p><a href={wa} className="mt-5 inline-flex rounded-xl bg-[#e24480] px-5 py-3 text-sm font-bold">Quero Tirar Dúvidas</a><p className="mt-4 text-xs text-slate-500">petshop@vidaanimalSantaMonica</p></div>
        </div>
      </footer>
      <a href={wa} aria-label="Abrir WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#e24480] text-white shadow-2xl"><MessageCircle className="h-7 w-7"/></a>
    </main>
  );
}
