import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetOneGame } from "../../hooks/useGames";
import { AuthContext } from '../../contexts/authContext'
import { gamesAPI } from "../../api/games-api";
import { useGetAllComments } from "../../hooks/useComments";
import { useForm } from "../../hooks/useForm";
import { commentsAPI } from "../../api/comments-api";

export default function DetailsGame() {
    const { gameId } = useParams();
    const game = useGetOneGame(gameId);
    const [comments, setComments] = useGetAllComments(gameId);
    const navigate = useNavigate();

    const { isAuthenticated, userId } = useContext(AuthContext);
    const isOwner = userId === game._ownerId;

    async function deleteHandler() {
        if (confirm('Are you sure you want to delete this game?')) {
            try {
                await gamesAPI.del(gameId);
                navigate('/games/catalog');
            } catch (err) {
                console.log(err);
            }
        }
    }

    const createHandler = async (values) => {
        try {
            values.gameId = gameId;
            const newComment = await commentsAPI.create(values);
            setComments(prevComments => [...prevComments, newComment]);
            resetForm();
        } catch (err) {
            //set error state and display error
            console.log(err);
        }
    }

    const { values, changeHandler, submitHandler, resetForm } = useForm({ comment: '' }, createHandler);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    {comments.length > 0 ?
                        <ul>
                            {comments.map(comment => {
                                return (
                                    <li key={comment._id} className="comment">
                                        <p>Content: {comment.comment}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        : <p className="no-comment">No comments.</p>
                    }

                </div>

                {isOwner &&
                    <div className="buttons">
                        <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                        <Link onClick={deleteHandler} className="button">Delete</Link>
                    </div>
                }
            </div>

            {isAuthenticated && !isOwner &&
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form onSubmit={submitHandler} className="form">
                        <textarea name="comment" value={values.comment} onChange={changeHandler} placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            }

        </section >
    )
}