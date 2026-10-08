import NBAGames from "./components/NBAGames.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Game} from "./interfaces/Game.ts";


const ParentDiv= styled.div`
    width: 100%;
    margin: auto;
    border: none;
`;

const Header= styled.h1`
    background-color: dodgerblue;
    color: lightgrey;
    text-align: center;
    padding: 10px;
`;

export default function App() {
    // hook used to store game date
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        async function fetchGames(): Promise<void> {
            const rawGames = await fetch('https://api.server.nbaapi.com/api/games');
            const {data}: {data: Game[]} = await rawGames.json();

            setGames(data);
        }

        fetchGames()
            .then(() => console.log("Data Loaded"))
            .catch((e: Error) => console.log("Error: " + e));
    }, [games.length]);

    return (
        <ParentDiv>
            <Header>
                <h1>NBA Games</h1>
            </Header>
            <NBAGames data={games} />
        </ParentDiv>
    )
}
