import { useState } from "react";
import TableRow from "./TableRow";

export default function Table(props) {

    const [sortingToggle, setSorrtingToggle] = useState('asc');

    function sortHandler(e) {
        props.setSorting(e.target.textContent);
        
        if (sortingToggle === 'asc') {
            return setSorrtingToggle('desc');
        }
        setSorrtingToggle('asc');
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th onClick={sortHandler}>
                        First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                            data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                            </path>
                        </svg>
                    </th>
                    <th onClick={sortHandler}>
                        Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                            </path>
                        </svg>
                    </th>
                    <th onClick={sortHandler}>
                        Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                            </path>
                        </svg>
                    </th>
                    <th onClick={sortHandler}>
                        Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                            </path>
                        </svg>
                    </th>
                    <th onClick={sortHandler}>
                        Created
                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                            data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                            </path>
                        </svg>
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                <TableRow
                    setUserDetails={props.setUserDetails}
                    setShowForm={props.setShowForm}
                    setDeleteUser={props.setDeleteUser}
                    users={props.users}
                    itemsPerPage={props.itemsPerPage}
                    currentPage={props.currentPage}
                    sorting={props.sorting}
                    sortingToggle={sortingToggle}
                    searchCriteria={props.searchCriteria}
                    setTotalUsers={props.setTotalUsers}
                />

            </tbody>
        </table>
    )
}