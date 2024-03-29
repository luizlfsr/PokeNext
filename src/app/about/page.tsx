import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex max-w-screen-sm justify-center items-center gap-5 m-auto">
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="pokemon charizard"
      />
      <div>
        <h1 className="text-4xl text-zinc-50 font-semibold mb-5">
          Sobre o projeto
        </h1>
        <p className="text-zinc-50">
          Projeto desenvolvido em Next.js com o intuito de ampliar minha gama de
          projetos para meu portfólio pessoal, inspirado no curso de Next.js
          do&nbsp;
          <Link
            href="https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft"
            target="_blank"
            className="text-zinc-400 font-medium hover:underline"
          >
            Matheus Battisti - Hora de Codar
          </Link>
          . Ultiliza a API do site{" "}
          <Link
            href="https://pokeapi.co/"
            target="_blank"
            className="text-zinc-400 font-medium hover:underline"
          >
            PokéAPI
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
