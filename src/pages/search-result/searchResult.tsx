import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FilterNav } from '../../components/nav-bar/FilterNav';
import { VideosList } from '../../components/videos-list/VideosList';
import { useAppSelector } from '../../store/hooks';
type InitialState = {
    loading: boolean;
    data: any;
    error: string;
};
export const SearchResult = () => {
    const [data, setData] = useState([]);
    const [resData, setresData]: any = useState();

    const DataSearch: InitialState = useAppSelector((state: any) => state.DataSearch);
    useEffect(() => {
        setData([]);
        setData(DataSearch.data.items);
        setresData(DataSearch.data);
    }, [DataSearch, DataSearch.loading]);
    return (
        <>
            {data && (
                <>
                    <FilterNav data={resData} />
                    <VideosList data={data} />
                </>
            )}

            {DataSearch.loading && (
                <Spinner animation="border" variant="danger" className="spinner" />
            )}
        </>
    );
};
