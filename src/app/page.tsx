import { Character } from "@/components/Character";
import { SwitchRoom } from "@/components/SwitchRoom";
import { Emphasis } from "@/components/text/Emphasis";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen bg-blur bg-cover bg-center bg-no-repeat">
      <section className="flex h-full w-1/3 min-w-[324px] flex-col items-center gap-14 rounded-r-[5%] border-1 border-dark-e-stormy bg-hei-se-black p-12">
        <h2 className="text-center text-xl font-light">
          Crie sua sala e mergulhe em um mar de <Emphasis>ideias</Emphasis>,{" "}
          <Emphasis>decisões</Emphasis> cruciais e <Emphasis>ações</Emphasis>{" "}
          assertivas
        </h2>

        <Character />

        <SwitchRoom />
      </section>

      <section className="flex flex-1 flex-col items-center justify-center gap-11 p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-9xl font-bold">
            Smooth<strong className="text-pool-water">Talk</strong>
          </h1>

          <span className="text-center text-xl font-extralight">
            Conectando pessoas com facilidade e fluidez!
          </span>
        </div>

        <div className="relative h-1/2 w-4/5">
          <Image
            src="/ImageCall.png"
            alt="Image call"
            fill={true}
            priority
            sizes="(max-width: 1068px) 33vw"
          />
        </div>
      </section>
    </main>
  );
}
