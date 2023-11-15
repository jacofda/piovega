import { defineStore } from 'pinia';
import { menuItem } from 'types/Components';

export const useLayoutStore = defineStore({
  id: 'layouts-store',
  state: () => {
    return {
      mobileMenu: false,
      menuItems: [
        {
          name: 'chi-siamo',
          title: 'Chi siamo',
          dropdown: true,
          show: false,
          class: 'relative',
        },
        {
          name: 'servizi',
          title: 'Servizi',
          dropdown: true,
          show: false,
        },
        {
          name: 'case-study',
          title: 'Casi studio',
          dropdown: false,
          show: false,
          path: 'casi-studio',
        },
        {
          name: 'team',
          title: 'Team',
          dropdown: false,
          show: false,
          path: '#team',
        },
      ],
    };
  },
  actions: {
    toggleItem(i: any) {
      const allItems = this.menuItems;
      for (const index in allItems) {
        if (allItems[index].name === i.name) {
          allItems[index].show = !allItems[index].show;
        } else {
          allItems[index].show = false;
        }
      }
      this.menuItems = [...allItems];
    },
    toggleMobile() {
      this.hideAll();
      this.mobileMenu = !this.mobileMenu;
    },
    hideAll() {
      for (const item in this.menuItems) {
        this.menuItems[item].show = false;
      }
      this.mobileMenu = false;
    },
  },
  getters: {
    menu: (state: any) => state.menuItems,
    isMobileOpen: (state: any) => state.mobileMenu,
    isDropdownOpen: (state: any) => {
      return state.menuItems.find((mi: menuItem) => mi.show && mi.dropdown) !== undefined;
    },
    about: (state: any) => state.menuItems[0],
    services: (state: any) => state.menuItems[1],
  },
});
