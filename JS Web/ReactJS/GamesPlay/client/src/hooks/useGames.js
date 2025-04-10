import { useEffect, useState } from "react";

import { gamesAPI } from '../api/games-api';

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const games = await gamesAPI.getAll();
            setGames(games);
        })()
    }, [])

    return games; // here if needed can return the setGame/s too
}

export function useGetOneGame(gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const game = await gamesAPI.getOne(gameId);
            setGame(game);
        })()
    }, [gameId])

    return game; // here if needed can return the setGame/s too
}

export function useCreateGame() {
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData);

    return gameCreateHandler;
}

export function useEditGame() {
    const gameEditHandler = (gameId, gameData) => gamesAPI.edit(gameId, gameData);

    return gameEditHandler;
}

export function useGetLatestGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const games = await gamesAPI.getLatest();
            setGames(games);
        })()
    }, [])

    return games; // here if needed can return the setGame/s too
}