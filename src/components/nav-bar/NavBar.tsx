import React, {useState  } from 'react';
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
            <div className='navbar__wrapper col-sm-5'> 
            <div className="navbar__actions col-sm-2">
                <img
                    className="navbar__logo"
                    src="./youtube-logo.png"
                    alt="Youtube logo"
                />
            </div> 
            <div className='navbar__search col-sm-10'>
             
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
            </div>
            </div>
      
        </nav>
    );
};
