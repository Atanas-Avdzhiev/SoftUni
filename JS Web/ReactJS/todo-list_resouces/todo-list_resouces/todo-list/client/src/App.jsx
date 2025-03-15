import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Header />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="table-wrapper">

            {loading && <LoadingSpinner />}
            <Table loading={setLoading} />

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App;