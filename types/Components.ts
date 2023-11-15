export type Panel = {
  name: string;
  label: string;
  active: boolean;
  tabIndex: number;
};
export type menuItem = {
  name: string;
  title: string;
  dropdown: boolean;
  show: boolean;
  class?: string;
  path?: string;
};

export type submenuItem = {
  name: string;
  image?: string;
  svg?: string;
  class?: string;
  component?: string;
  slug: string;
  description: string;
};
