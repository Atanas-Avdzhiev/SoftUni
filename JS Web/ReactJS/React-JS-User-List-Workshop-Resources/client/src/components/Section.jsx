import { useState } from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import TableWrapper from "./TableWrapper";

export default function (props) {

    const [totalUsers, setTotalUsers] = useState(0);

    return (
        <section className="card users-container">

            <SearchBar
                setCurrentPage={props.setCurrentPage}
                setSearchCriteria={props.setSearchCriteria}
            />

            <TableWrapper
                setUserDetails={props.setUserDetails}
                setShowForm={props.setShowForm}
                setDeleteUser={props.setDeleteUser}
                users={props.users}
                itemsPerPage={props.itemsPerPage}
                currentPage={props.currentPage}
                sorting={props.sorting}
                setSorting={props.setSorting}
                searchCriteria={props.searchCriteria}
                setTotalUsers={setTotalUsers}
                totalUsers={totalUsers}
            />

            <button onClick={() => props.setShowForm('Add')} className="btn-add btn">Add new user</button>

            <Pagination
                setItemsPerPage={props.setItemsPerPage}
                setCurrentPage={props.setCurrentPage}
                currentPage={props.currentPage}
                itemsPerPage={props.itemsPerPage}
                totalUsers={totalUsers}
            />

        </section>
    )
}