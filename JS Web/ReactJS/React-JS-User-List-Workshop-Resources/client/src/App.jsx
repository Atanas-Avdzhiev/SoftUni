import { useState } from "react"
import DeleteUser from "./components/DeleteUser"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import Section from "./components/Section"
import UserDetails from "./components/UserDetails"
import { useEffect } from "react"
import requests from "./api/requests.js"
import { useLoading } from "./contexts/LoadingContext"

function App() {

  const [showForm, setShowForm] = useState(false);
  const [userDetails, setUserDetails] = useState('');
  const [deleteUser, setDeleteUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState('');
  const [searchCriteria, setSearchCriteria] = useState({ search: '', criteria: '' });
  const { setIsLoading, setError } = useLoading();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await requests.getAllUsers();
        
        setUsers(response);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch!');
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>

      <Header />

      <main className="main">

        <Section
          setShowForm={setShowForm}
          setUserDetails={setUserDetails}
          setDeleteUser={setDeleteUser}
          users={users}
          setItemsPerPage={setItemsPerPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          sorting={sorting}
          setSorting={setSorting}
          setSearchCriteria={setSearchCriteria}
          searchCriteria={searchCriteria}
        />

        {userDetails && <UserDetails userDetails={userDetails} setUserDetails={setUserDetails} />}

        {showForm && <Form setShowForm={setShowForm} showForm={showForm} setUsers={setUsers} />}

        {deleteUser && <DeleteUser deleteUser={deleteUser} setDeleteUser={setDeleteUser} setUsers={setUsers} />}

      </main >

      <Footer />

    </>
  )
}

export default App