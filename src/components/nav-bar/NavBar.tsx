import React, { useState, useEffect } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { fetchDataSearch } from '../../features/form-submit/DataFormSubmitSlice';
import { useAppDispatch } from '../../store/hooks';
import './styles/NavBar.scss';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const NavBar = () => {
    const [value, setvalue] = useState(' ');
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.matchMedia('(max-width:  768px)').matches) {
                setIsClicked(false);
            } else {
                setIsClicked(true);
            }
        });
    }, []);

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
    const changedisplay = (e: any) => {
        e.stopPropagation();
        setIsClicked(!isClicked);
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
                        <Button
                            className="btn "
                            type="submit"
                            variant="outline-secondary"
                            size="lg"
                        >
                            <i className="fa fa-search"></i>
                        </Button>
                    </form>
                </Col>
                <Col xs={10} className="navbar__search_mo ">
                    <form onSubmit={handleSearch} className="navbar__search_mo_form ">
                        <input
                            type="text"
                            placeholder="search"
                            onChange={onChangeValue}
                            value={value}
                            className={`form-control  ${isClicked ? 'show' : 'hide'}`}
                        />
                        <Button
                            className="btn"
                            type="button"
                            onClick={changedisplay}
                            variant="outline-secondary"
                            size="lg"
                        >
                            <i className="fa fa-search"></i>
                        </Button>
                    </form>
                </Col>
            </Col>
        </nav>
    );
};
