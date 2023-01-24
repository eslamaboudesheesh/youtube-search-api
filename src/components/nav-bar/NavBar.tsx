import React, { useState } from 'react';
import { fetchDataSearch } from '../../features/form-submit/DataFormSubmitSlice';
import { useAppDispatch } from '../../store/hooks';
import './styles/NavBar.scss';
export const NavBar = () => {
    const [value, setvalue] = useState(' ');
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
    };
    return (
        <nav className="navbar">
            <div className="navbar__actions">
                <img
                    className="navbar__logo"
                    src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
                    alt="Youtube logo"
                />
            </div>

            <form onSubmit={handleSearch} className="navbar__search form ">
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
        </nav>
    );
};
