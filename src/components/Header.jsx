import { Filters } from "./Filters";

export function Header(){
    return (
        <>
            <h1 
                className="flex justify-center text-gray-400 text-4xl font-poppins font-bold p-6 underline"
            >
                <a href="/">React shopping</a>
            </h1>
            <Filters/>
        </>
    )
}