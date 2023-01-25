import React, { useState } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { fetchDataSearch } from '../../features/form-submit/DataFormSubmitSlice';
import { useAppDispatch } from '../../store/hooks';
import './styles/NavBar.scss';
import Col from 'react-bootstrap/Col';

export const NavBar = () => {
    const [value, setvalue] = useState(' ');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onChangeValue = (e: any) => {
        setvalue(e.target.value);
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        onSearch(value);
    };

    const onSearch = (value: string) => {
        dispatch(fetchDataSearch(value.toLowerCase()));
        navigate({
            pathname: 'search',
            search: createSearchParams({
                query: value.trim(),
            }).toString(),
        });
    };
    return (
        <nav className="navbar">
            <Col xs={12} xl={5} className="navbar__wrapper ">
                <Col xs={2} className="navbar__actions ">
                    <Link to="/">
                        <img className="navbar__logo" src="./youtube-logo.png" alt="Youtube logo" />
                    </Link>
                </Col>
                <Col xs={10} className="navbar__search ">
                    <form onSubmit={handleSearch} className="navbar__search_form ">
                        <input
                            type="text"
                            placeholder="search"
                            onChange={onChangeValue}
                            value={value}
                            className="form-control"
                        />
                        <button className="btn" type="submit">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/VisualEditor_-_Icon_-_Search-big.svg"
                                alt="Find"
                            />
                        </button>
                    </form>
                </Col>
            </Col>
        </nav>
    );
};
