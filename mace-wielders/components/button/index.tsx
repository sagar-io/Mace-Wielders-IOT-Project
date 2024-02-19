interface ButtonType {
    name: string
}

export const Button = ({ name }: ButtonType) => {
    return (
        <button className="mb-10 pr-7 pl-8 py-2 bg-white text-black shadow-md text-left rounded-md relative after:absolute after:top-1/5 after:right-3 after:w-7 after:h-7 after:bg-[url('/images/start.svg')] after:bg-no-repeat after:pl-4 hover:scale-110 transition-transform">
            <p className="inline-block mr-9">{name}</p>
        </button>
    )
}