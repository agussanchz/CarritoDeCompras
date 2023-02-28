import { Filters } from "./Filters";

export function Header({ onChangeFilters }){
    return (
        <>
            <h1 className="text-2xl flex justify-center my-4 font-bold font-mono">React shopping</h1>
            <Filters onChangeFilters={onChangeFilters}/>
        </>
    )
}