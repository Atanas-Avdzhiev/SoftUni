import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import styles from './search.module.css';
import { useEffect, useState } from 'react';
import { useGetSearchedAuctions } from '../../hooks/useAuctions';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { FaSearch } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SearchAuctions() {

    const navigate = useNavigate();

    const [auctions, setAuctions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextPage, setNextPage] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const auctionName = searchParams.get('auctionName') || '';
    const category = searchParams.get('category') || '';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';
    const closed = searchParams.get('closed') || '';
    const page = Number(searchParams.get('page')) || 1;

    const recordsPerPage = 10;
    const recordsToSkip = (+page - 1) * recordsPerPage;

    useEffect(() => {
        (async () => {
            try {
                if (page <= 0) {
                    setSearchParams({ auctionName, category, minPrice, maxPrice, closed, page: '1' });
                    return;
                }

                setIsLoading(true);
                const auctions = await useGetSearchedAuctions({ auctionName, category, minPrice, maxPrice, closed }, recordsToSkip, recordsPerPage + 1);
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
        })()
    }, [searchParams])

    const initialValues = { auctionName, category, minPrice, maxPrice, closed };

    const searchHandler = (values) => {
        setSearchParams({ ...values, page: '1' });
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, searchHandler);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={submitHandler} className={styles.searchForm}>
                <div className={styles.inputDiv}>
                    <label htmlFor="auctionName">Auction Name:</label>
                    <input
                        id="auctionName"
                        name="auctionName"
                        type="text"
                        placeholder="Auction Name"
                        value={values.auctionName}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputDiv}>
                    <label htmlFor="category">Category:</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        placeholder="Category"
                        value={values.category}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputDiv}>
                    <label htmlFor="minPrice">Min Start Price:</label>
                    <input
                        id="minPrice"
                        name="minPrice"
                        type="number"
                        placeholder="Min Start Price"
                        value={values.minPrice}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputDiv}>
                    <label htmlFor="maxPrice">Max Start Price:</label>
                    <input
                        id="maxPrice"
                        name="maxPrice"
                        type="number"
                        placeholder="Max Start Price"
                        value={values.maxPrice}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputDiv}>
                    <label htmlFor="closed">Status:</label>
                    <div className={styles.selectWrapper}>
                        <select
                            id="closed"
                            name="closed"
                            value={values.closed}
                            onChange={changeHandler}
                            className={styles.select}
                        >
                            <option value="">All</option>
                            <option value="false">Open</option>
                            <option value="true">Closed</option>
                        </select>

                        <button className={styles.searchButton}>
                            <FaSearch size={24} />
                        </button>

                    </div>
                </div>

            </form>

            {auctions.length > 0
                ?
                <div className={styles.allAuctionsContainer}>
                    {auctions.map(auction => {
                        return (
                            <div key={auction._id} onClick={() => navigate(`/auctions/${auction._id}/details`)} className={styles.auction}>
                                <div className={styles.imageWrap}>
                                    <img src={auction?.image?.length > 0 ? auction.image[0] : auction.imageUrl} alt={auction.auctionName} />
                                </div>
                                <h6>{auction.auctionName}</h6>
                                <h2>{auction.category}</h2>
                                {(auction.closed === 'false' && auction.bidPrice >= auction.price)
                                    ? <p className={styles.highestBid}>Highest bid: <strong>{auction.bidPrice}$</strong></p>
                                    : auction.closed === 'true'
                                        ? <p className={styles.highestBid}>Winning big: <strong>{auction.bidPrice}$</strong></p>
                                        : <p className={styles.highestBid}>No bids yet</p>
                                }
                            </div>
                        )
                    })}
                </div>
                :
                <div className={styles.noAuctionsWrapper}>
                    <h3 className={styles.noArticles}>Sorry, no auctions were found!</h3>
                </div>
            }

            {auctions.length > 0 && (
                <div className={styles.paginationContainer}>
                    <button disabled={+page === 1}
                        onClick={() => setSearchParams({ auctionName, category, minPrice, maxPrice, closed, page: (page - 1).toString() })}
                        className={`${styles.paginationBtn} ${styles.prev}`}><ChevronLeft style={{ width: '35px', height: '35px' }} /></button>
                    <div className={styles.pageNumbers}>
                        {page > 1 && <button
                            onClick={() => setSearchParams({ auctionName, category, minPrice, maxPrice, closed, page: (page - 1).toString() })}
                            className={styles.pageCircle}>{+page - 1}</button>}

                        <button className={styles.pageCircleCurrent}>{+page}</button>

                        {nextPage && <button
                            onClick={() => setSearchParams({ auctionName, category, minPrice, maxPrice, closed, page: (page + 1).toString() })}
                            className={styles.pageCircle}>{+page + 1}</button>}
                    </div>
                    <button disabled={!nextPage}
                        onClick={() => setSearchParams({ auctionName, category, minPrice, maxPrice, closed, page: (page + 1).toString() })}
                        className={`${styles.paginationBtn} ${styles.next}`}><ChevronRight style={{ width: '35px', height: '35px' }} /></button>
                </div>
            )}
        </div>
    )
}