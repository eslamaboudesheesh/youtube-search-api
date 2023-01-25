import React from 'react';
import './styles/FilterNav.scss';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

type fiterNave = {
    pageInfo: { totalResults: number; resultsPerPage: number };
};
export const FilterNav = ({ data }: { data: fiterNave }) => {
    console.log(data);
    return (
        <>
            <nav className="filterNav ">
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
            <nav className="filterNavmo  ">
                <Col xs={12} xl={5} className="filterNavmo__wrapper  ">
                    <Col xs={3} className="filterNavmo__all ">
                        <Form.Select aria-label="Default select example">
                            <option>All </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>

                    <Col xs={3} className="filterNavmo__any ">
                        <Form.Select aria-label="Default select example">
                            <option>Any Time</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Col>
            </nav>
        </>
    );
};
