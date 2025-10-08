import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
  isScrolled: boolean;
  showNavbar: boolean;
  openDropdown: string | null;
  isMobileMenuOpen: boolean;
}

const initialState: NavbarState = {
  isScrolled: false,
  showNavbar: true,
  openDropdown: null,
  isMobileMenuOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setShowNavbar: (state, action: PayloadAction<boolean>) => {
      state.showNavbar = action.payload;
    },
    setOpenDropdown: (state, action: PayloadAction<string | null>) => {
      state.openDropdown = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    closeAllDropdowns: (state) => {
      state.openDropdown = null;
      state.isMobileMenuOpen = false;
    },
  },
});

export const {
  setScrolled,
  setShowNavbar,
  setOpenDropdown,
  toggleMobileMenu,
  closeMobileMenu,
  closeAllDropdowns,
} = navbarSlice.actions;

export default navbarSlice.reducer;
