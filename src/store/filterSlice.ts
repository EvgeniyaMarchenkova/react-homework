import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { SearchBy } from '../model';

interface FilterState {
  search: string;
  searchBy: SearchBy;
}

const initialState: FilterState = {
  search: '',
  searchBy: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state: FilterState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSearchBy: (state: FilterState, action: PayloadAction<SearchBy>) => {
      state.searchBy = action.payload;
    },
  },
});

export const { setSearch, setSearchBy } = filterSlice.actions;

export const selectSearch = (state: RootState) => state.filter.search;
export const selectSearchBy = (state: RootState) => state.filter.searchBy;

export default filterSlice.reducer;
