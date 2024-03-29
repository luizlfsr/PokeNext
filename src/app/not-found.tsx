import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-zinc-50 flex flex-col gap-1 justify-center items-center">
      <h1 className="text-4xl font-semibold mb-3">404</h1>
      <p className="text-xl">Parece que esta pagina não existe!</p>
      <Link href="/" className="text-red-500 hover:underline text-2xl">Voltar para Home</Link>
    </div>
  );
}
