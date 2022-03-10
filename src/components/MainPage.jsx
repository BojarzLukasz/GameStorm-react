import React, {useEffect, useState} from "react";
import CustomAppBar from "./AppBar";


const MainPage = () =>  {

    useEffect(() => {
        fetchItems();
    }, [])

    const [games, setGames] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.rawg.io/api/games?key=ec3a8cae002c48538ce195406a786904');
        const games = await data.json();
        console.log(games.results);
        setGames(games);
    };


    return(
        <>
            <CustomAppBar/>
            <main style={{minHeight: '100vh', background: "linear-gradient(204deg, rgba(104,15,121,1) 0%, rgba(17,12,2,1) 87%)"}}>
            </main>
        </>
    )
}

export default MainPage;