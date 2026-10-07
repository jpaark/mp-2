import styled from "styled-components";
import type {Insult} from "../interfaces/Insults.ts";

const AllInsultsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: dodgerblue;
`;

const InsultDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 5%;
    background-color: dodgerblue;
    color: black;
    border: 1px solid lightgray;
    text-align: center;
`;

export default function EvilInsults(props: {data: Insult[]}) {
    return (
        <AllInsultsDiv>
            {
                props.data.map((item: Insult) =>
                <InsultDiv key={item.number}>
                    <h1>Insult #{item.number}</h1>
                    <p>{item.insult}</p>
                    <p>Created by: {item.createdby}</p>
                    <p>Date Created: {item.created}</p>
                    <p>Language: {item.language}</p>
                </InsultDiv>)
            }
        </AllInsultsDiv>
    );
}
