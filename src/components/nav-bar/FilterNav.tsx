import React from 'react';
import './styles/FilterNav.scss';
type fiterNave = {
    pageInfo: { totalResults: number; resultsPerPage: number };
};
export const FilterNav = ({ data }: { data: fiterNave }) => {
    console.log(data);
    return (
        <nav className="filterNav  ">
            <div className="filterNav__wrapper col-sm-5 ">
                <div className="filterNav__title col-sm-6" >
                    {data && <p> About {data?.pageInfo.totalResults} filterd results </p>}
                </div>

                <div className="filterNav__button col-sm-6">
                    <span className="filterNav__filter">
                        <i className="fa-solid fa-filter"></i> filter{' '}
                    </span>
                </div>
            </div>
        </nav>
    );
};
