import { getAllQuestions } from "../../modules/helpers.js";
import { html, render, page } from "../../modules/modules.js";

const main = document.querySelector('body > #container > #content');

const template = (data, quizId) => html`
    <section id="editor">

        <header class="pad-large">
            <h2>Questions</h2>
        </header>

        <div class="pad-large alt-page">

            ${
                data.length === 0 ? html`
                    <article class="editor-question">
                        <div class="layout">
                            <div class="question-control">
                                <button class="input submit action"><i class="fas fa-check-double"></i>
                                    Save</button>
                                <button class="input submit action"><i class="fas fa-times"></i> Cancel</button>
                            </div>
                            <h3>Question 1</h3>
                        </div>
                        <form>
                            <textarea class="input editor-input editor-text" name="text"
                                placeholder="Enter question"></textarea>
                            <div class="editor-input">

                                <label class="radio">
                                    <input class="input" type="radio" name="question-1" value="0" />
                                    <i class="fas fa-check-circle"></i>
                                </label>

                                <input class="input" type="text" name="answer-0" />
                                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                            </div>
                            <div class="editor-input">

                                <label class="radio">
                                    <input class="input" type="radio" name="question-1" value="1" />
                                    <i class="fas fa-check-circle"></i>
                                </label>

                                <input class="input" type="text" name="answer-1" />
                                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                            </div>
                            <div class="editor-input">

                                <label class="radio">
                                    <input class="input" type="radio" name="question-1" value="2" />
                                    <i class="fas fa-check-circle"></i>
                                </label>

                                <input class="input" type="text" name="answer-2" />
                                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                            </div>
                            <div class="editor-input">
                                <button class="input submit action">
                                    <i class="fas fa-plus-circle"></i>
                                    Add answer
                                </button>
                            </div>
                        </form>

                        <!-- ${data.isQuestionAdded ? html`<div class="loading-overlay working"></div>` : ""} -->
                    </article>
                ` : data.map((item, i) => {
                    return item !== null ? html`
                        <article class="editor-question">
                            <div class="layout">
                                <div class="question-control">
                                    <button class="input submit action"><i class="fas fa-edit"></i> Edit</button>
                                    <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
                                </div>
                                <h3>Question ${i + 1}</h3>
                            </div>
                            <form>
                                <p class="editor-input">${item.text}</p>
                                ${
                                    item.answers.map(answer => html`
                                        <div class="editor-input">
                                            <label class="radio">
                                                <input class="input" type="radio" name="question-2" value="0" disabled />
                                                <i class="fas fa-check-circle"></i>
                                            </label>
                                            <span>${answer}</span>
                                        </div>
                                    `)
                                }
                            </form>
                        </article>
                ` : html`
                    <article class="editor-question">
                        <div class="layout">
                            <div class="question-control">
                                <button class="input submit action"><i class="fas fa-check-double"></i>
                                    Save</button>
                                <button class="input submit action"><i class="fas fa-times"></i> Cancel</button>
                            </div>
                            <h3>Question ${i + 1}</h3>
                        </div>
                        <form>
                            <textarea class="input editor-input editor-text" name="text"
                                placeholder="Enter question"></textarea>
                            <div class="editor-input">

                                <label class="radio">
                                    <input class="input" type="radio" name="question-1" value="0" />
                                    <i class="fas fa-check-circle"></i>
                                </label>

                                <input class="input" type="text" name="answer-0" />
                                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                            </div>
                            <div class="editor-input">

                                <label class="radio">
                                    <input class="input" type="radio" name="question-1" value="1" />
                                    <i class="fas fa-check-circle"></i>
                                </label>

                                <input class="input" type="text" name="answer-1" />
                                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                            </div>
                            <div class="editor-input">

                                <label class="radio">
                                    <input class="input" type="radio" name="question-1" value="2" />
                                    <i class="fas fa-check-circle"></i>
                                </label>

                                <input class="input" type="text" name="answer-2" />
                                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                            </div>
                            <div class="editor-input">
                                <button class="input submit action">
                                    <i class="fas fa-plus-circle"></i>
                                    Add answer
                                </button>
                            </div>
                        </form>

                        <!-- ${data.isQuestionAdded ? html`<div class="loading-overlay working"></div>` : ""} -->
                    </article>
                `
                })
            }

            <article class="editor-question">
                <div class="editor-input">
                    <button @click=${() => addQuestion(data, quizId)} class="input submit action">
                        <i class="fas fa-plus-circle"></i>
                        Add question
                    </button>
                </div>
            </article>

        </div>

    </section>
`;

export async function editView(ctx) {
    const questionData = await getAllQuestions(ctx.params.id);
    console.log(questionData)
    if (questionData.data.length === 0) {
        questionData.data.push(null);
    }
    
    render(template(questionData.data, ctx.params.id), main);
}

async function saveChanges(data) {
    // data.isQuestionAdded = true;

    // setTimeout(() => {
    //     data.isQuestionAdded = false;
    // }, 1000);
}

async function addQuestion(data, quizId) {
    data.push(null);

    render(template(data, quizId), main);
}

const renderNewQuestion = (quizLength) => {
    return html`
        <article class="editor-question">
            <div class="layout">
                <div class="question-control">
                    <button class="input submit action"><i class="fas fa-check-double"></i>
                        Save</button>
                    <button class="input submit action"><i class="fas fa-times"></i> Cancel</button>
                </div>
                <h3>Question ${quizLength + 1}</h3>
            </div>
            <form>
                <textarea class="input editor-input editor-text" name="text"
                    placeholder="Enter question"></textarea>
                <div class="editor-input">
                    <label class="radio">
                        <input class="input" type="radio" name="question-1" value="0" />
                        <i class="fas fa-check-circle"></i>
                    </label>
                    <input class="input" type="text" name="answer-0" />
                    <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                </div>
                <div class="editor-input">
                    <label class="radio">
                        <input class="input" type="radio" name="question-1" value="1" />
                        <i class="fas fa-check-circle"></i>
                    </label>
                    <input class="input" type="text" name="answer-1" />
                    <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                </div>
                <div class="editor-input">
                    <label class="radio">
                        <input class="input" type="radio" name="question-1" value="2" />
                        <i class="fas fa-check-circle"></i>
                    </label>
                    <input class="input" type="text" name="answer-2" />
                    <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                </div>
                <div class="editor-input">
                    <button class="input submit action">
                        <i class="fas fa-plus-circle"></i>
                        Add answer
                    </button>
                </div>
            </form>
        </article>
    `;
}