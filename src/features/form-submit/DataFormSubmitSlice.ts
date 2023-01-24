import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
const API_KEY = 'AIzaSyB6QLbWh7WHTHKrDe25405JsHkSVSBNcSg';

type InitialState = {
    loading: boolean;
    data: {};
    error: string;
};
const initialState: InitialState = {
    loading: false,
    data: {},
    error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchDataSearch = createAsyncThunk('Search', (data: string) => {
    return axios
        .get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                key: API_KEY,
                q: data,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response: any) => response.data);
});

const DataFormSubmitSlice = createSlice({
    name: 'DataForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDataSearch.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDataSearch.fulfilled, (state, action: PayloadAction<[]>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(fetchDataSearch.rejected, (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default DataFormSubmitSlice.reducer;
