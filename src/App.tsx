import EvilInsults from "./components/EvilInsults.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Insult} from "./interfaces/Insults.ts";


const ParentDiv= styled.div`
    width: 100%;
    margin: auto;
    border: 7px lightgrey;
`;

export default function App() {
    const [insults, setInsults] = useState<Insult[]>([]);

    useEffect(() => {
        async function fetchInsults(): Promise<void> {
            const rawInsults = await fetch('https://evilinsult.com/generate_insult.php');
            const {result}: {result: Insult[]} = await rawInsults.json();

            setInsults(result);
        }

        fetchInsults()
            .then(() => console.log("Data Loaded"))
            .catch((e: Error) => console.log("Error: " + e));
    }, [insults]);

    return (
        <ParentDiv>
            <EvilInsults data={insults} />
        </ParentDiv>
    )
}
