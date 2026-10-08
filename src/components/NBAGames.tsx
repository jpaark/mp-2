import styled from "styled-components";
import type {Game} from "../interfaces/Game.ts";

const AllGamesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: dodgerblue;
`;

const SingleGameDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 5%;
    margin: 1%;
    background-color: dodgerblue;
    color: white;
    border: 5px solid lightgray;
    text-align: center;
`;

export default function NBAGames(props: {data: Game[]}) {
    return (
        <AllGamesDiv>
            {
                props.data.map((item: Game) =>
                <SingleGameDiv key={item.gameID}>
                    <h1>{item.visitorTeam} @ {item.homeTeam}</h1>
                    <p>Score: {item.visitorPts} - {item.homePts}</p>
                    <p>Date: {item.date}</p>
                </SingleGameDiv>)
            }
        </AllGamesDiv>
    );
}
