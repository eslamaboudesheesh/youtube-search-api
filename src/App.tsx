import React, { useEffect, useState } from "react";
import "./App.scss";
import { Layout } from "./components/layout/Layout";
import { VideosList } from "./components/videos-list/VideosList";
import { useAppSelector } from "./store/hooks";

type InitialState = {
  loading: boolean;
  data: any;
  error: string;
};
function App() {
  const [data, setData] = useState([]);

  const DataSearch: InitialState = useAppSelector(
    (state: any) => state.DataSearch
  );
  useEffect(() => {

    setData(DataSearch.data.items);
  }, [DataSearch, DataSearch.loading]);

  return (
    <Layout>
      {/* <div className="App ">
        {data && (
          data.map((item: SearchResult, index: number) => (
            <div key={item.id.videoId} >
              <p>{item.id.kind?.includes(`channel`) ? "fff" : "non"}</p>
              <img
                src={item.snippet.thumbnails.medium.url}
                width={item.snippet.thumbnails.medium.width}
                height={item.snippet.thumbnails.medium.height}
                alt={item.snippet.title}
              />
              <p>{item.snippet.title}</p>
              <p>{item.snippet.description}</p>
            </div>
          ))
        ) }
        {DataSearch.loading && (
          <Spinner animation="border" variant="primary" />
        )}
       
      </div> */}
      <VideosList data={data}/>
    </Layout>
  );
}

export default App;
