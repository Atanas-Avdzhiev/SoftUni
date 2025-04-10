import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEditGame, useGetOneGame } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";

export default function EditGame() {
    const { gameId } = useParams();
    const game = useGetOneGame(gameId);

    const navigate = useNavigate();
    const editGame = useEditGame();

    useEffect(() => {
        if (game) {
            setValues({
                title: game.title || '',
                category: game.category || '',
                maxLevel: game.maxLevel || '',
                imageUrl: game.imageUrl || '',
                summary: game.summary || ''
            });
        }
    }, [game]);

    const editHandler = async (values) => {
        try {
            await editGame(gameId, values);
            navigate(`/games/${gameId}/details`);
        } catch (err) {
            //set error state and display error
            console.log(err);
        }
    }

    const { values, changeHandler, submitHandler, setValues } = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    }, editHandler);

    return (
        <section id="edit-page" className="auth">
            <form onSubmit={submitHandler} id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={changeHandler} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={values.maxLevel} onChange={changeHandler} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}