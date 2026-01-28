import Logo from "@/components/navigation/Logo"

export default function Notfound() {
    return (
        <div className="flex flex-col min-h-screen">
            <header
                className="mx-25 my-10.5"
                role="banner">
                <Logo />
            </header>
            <main className="flex flex-1 items-center justify-center">
                <h1 className="text-4xl ">La page que vous demandez est introuvable.</h1>
            </main>
        </div>
    )
}
