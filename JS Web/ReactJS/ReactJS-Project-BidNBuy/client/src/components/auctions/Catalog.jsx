import { useLocation, useNavigate } from "react-router-dom";

import { useGetClosedAuctions, useGetOpenAuctions } from "../../hooks/useAuctions";
import Auction from "./Auction";
import styles from './catalog.module.css';
import { useState, useEffect } from "react";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CatalogAuction() {
    const navigate = useNavigate();
    const location = useLocation();

    const [auctions, setAuctions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextPage, setNextPage] = useState(false);

    const params = new URLSearchParams(location.search);
    const page = Number(params.get('page')) || 1;

    const recordsPerPage = 10;
    const recordsToSkip = (page - 1) * recordsPerPage;

    useEffect(() => {
        (async () => {
            try {
                if (page <= 0) {
                    return navigate(`${location.pathname}?page=1`);
                }

                let auctions = [];
                setIsLoading(true);
                if (location.pathname === '/auctions/catalog') {
                    auctions = await useGetOpenAuctions(recordsToSkip, recordsPerPage + 1);
                } else if (location.pathname === '/auctions/closed') {
                    auctions = await useGetClosedAuctions(recordsToSkip, recordsPerPage + 1);
                }
                if (auctions.length === recordsPerPage + 1) {
                    setNextPage(true);
                    auctions.pop();
                } else {
                    setNextPage(false);
                }
                setAuctions(auctions);
            } catch (err) {
                console.log(err.message);
            } finally {
                setIsLoading(false);
            }
        })();

    }, [location.pathname, location.search]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <section className={styles.catalogPage}>

            {location.pathname === '/auctions/catalog'
                ? <h1>Open Auctions</h1>
                : <h1>Closed Auctions</h1>
            }

            {auctions.length > 0
                ?
                <div className={styles.allAuctionsContainer}>
                    {auctions.map(auction => <Auction key={auction._id} {...auction} />)}
                </div>
                : <h3 className={styles.noArticles}>Sorry, theres no auctions right now!</h3>
            }

            {auctions.length > 0 && (
                <div className={styles.paginationContainer}>
                    <button disabled={page === 1} onClick={() => navigate(`${location.pathname}?page=${page - 1}`)} className={`${styles.paginationBtn} ${styles.prev}`}><ChevronLeft style={{ width: '35px', height: '35px' }} /></button>
                    <div className={styles.pageNumbers}>
                        {page > 1 && <button onClick={() => navigate(`${location.pathname}?page=${page - 1}`)} className={styles.pageCircle}>{page - 1}</button>}

                        <button className={styles.pageCircleCurrent}>{page}</button>

                        {nextPage && <button onClick={() => navigate(`${location.pathname}?page=${page + 1}`)} className={styles.pageCircle}>{page + 1}</button>}
                    </div>
                    <button disabled={!nextPage} onClick={() => navigate(`${location.pathname}?page=${page + 1}`)} className={`${styles.paginationBtn} ${styles.next}`}><ChevronRight style={{ width: '35px', height: '35px' }} /></button>
                </div>
            )}

        </section>
    );
}
