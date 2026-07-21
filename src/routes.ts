export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/buttons', label: 'Buttons', pageFile: 'ButtonsPage' },
  { path: '/products', label: 'Products', pageFile: 'ProductsPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
  { path: '/about', label: 'About', pageFile: 'AboutPage' },
];
