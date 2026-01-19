import Logo from "@/components/navigation/Logo";
import Photographer from "@/components/photographer/Photographer";
import { getAllPhotographers } from "@/app/lib/prisma-db";

export default async function Home() {

  const photographers = await getAllPhotographers()

  return (
    <div className="max-w-[1440px] mx-auto">
      <header className="flex justify-between mx-25 my-10.5 items-center">
        <Logo />
        <h1 className="text-4xl font-normal text-primary leading-none">Nos photographes</h1>
      </header>

      <main className="w-11/12 mx-auto my-27.5">
        <section className="w-full" >
          <h2 className="sr-only">Listes des photographes</h2>
          <div className="flex flex-wrap justify-around gap-y-20 gap-x-40">
            {photographers.map((photographer) => (
              <Photographer key={photographer.id} {...photographer} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
