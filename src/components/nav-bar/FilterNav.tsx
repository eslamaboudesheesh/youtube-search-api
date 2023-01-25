import React from 'react';
import './styles/FilterNav.scss';
import Col from 'react-bootstrap/Col';
type fiterNave = {
    pageInfo: { totalResults: number; resultsPerPage: number };
};
export const FilterNav = ({ data }: { data: fiterNave }) => {
    console.log(data);
    return (
        <nav className="filterNav  ">
            <Col xs={12} xl={5} className="filterNav__wrapper  ">
                <Col xs={6} className="filterNav__title ">
                    {data && <p> About {data?.pageInfo.totalResults} filterd results </p>}
                </Col>

                <Col xs={6} className="filterNav__button ">
                    <span className="filterNav__filter">
                        <i className="fa-solid fa-filter"></i> filter
                    </span>
                </Col>
            </Col>
        </nav>
    );
};
