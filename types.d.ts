type Game = {
  identifier: string;
  seo_title: string;
  title: string;
  provider: string;
  categories: string[];
}

type Params = {
  params: {
    providerOrCategory: string;
    seo_title: string;
  }
}
