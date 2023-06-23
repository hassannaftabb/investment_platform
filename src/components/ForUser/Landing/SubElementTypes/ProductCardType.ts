export type ProductCardProp = {
  images: Array<any>;
  title: string;
  content?: string;
  className?: string;
  save?: number;
  saved?: boolean;
  homePage?: boolean;
  handleSave?: any;
  containerId?: number;
  address?: string;
  category?: string[];
  cost?: string;
  id?: number | null;
  zoom?: boolean;
  userId?: number;
  redirectUrl?: string;
};
