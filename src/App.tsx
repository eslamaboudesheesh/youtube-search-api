import React, { useEffect, useState } from 'react';
import './App.scss';
import { Layout } from './components/layout/Layout';
import { FilterNav } from './components/nav-bar/FilterNav';
import { VideosList } from './components/videos-list/VideosList';
import { useAppSelector } from './store/hooks';

type InitialState = {
    loading: boolean;
    data: any;
    error: string;
};
function App() {
    const [data, setData] = useState([]);
    const [resData, setresData] : any =useState();

    const DataSearch: InitialState = useAppSelector((state: any) => state.DataSearch);
    useEffect(() => {
       setData([])
        setData(DataSearch.data.items);
        setresData(DataSearch.data);
    }, [DataSearch, DataSearch.loading]);

    return (
        <Layout>
           {data && ( <> 
            <FilterNav data= {resData} />
            <VideosList data={data} /> 
            </>
           )
          }
          {DataSearch.loading && <> Looafing </>}
        </Layout>
    );
}

export default App;
