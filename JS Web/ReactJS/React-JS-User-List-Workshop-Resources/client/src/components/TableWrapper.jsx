import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";
import NoContent from "./NoContent";
import NoUsersAddedYet from "./NoUsersAddedYet";
import Table from "./Table";
import { useLoading } from "../contexts/LoadingContext";

export default function TableWrapper(props) {

    const { isLoading, error } = useLoading();
    const noUsers = props.users.length >= 1 ? false : true;
    const notUsersFound = props.totalUsers <= 0;

    return (
        <div className="table-wrapper">

            <div className="loading-shade">

                {isLoading && <LoadingSpinner />}

                {noUsers && !error && !isLoading && <NoUsersAddedYet />}

                {notUsersFound && !error && !noUsers && !isLoading && <NoContent />}

                {error && !isLoading && <Error />}

            </div>

            <Table
                setUserDetails={props.setUserDetails}
                setShowForm={props.setShowForm}
                setDeleteUser={props.setDeleteUser}
                users={props.users}
                itemsPerPage={props.itemsPerPage}
                currentPage={props.currentPage}
                sorting={props.sorting}
                setSorting={props.setSorting}
                searchCriteria={props.searchCriteria}
                setTotalUsers={props.setTotalUsers}
            />

        </div>
    )
}