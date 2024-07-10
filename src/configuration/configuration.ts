export type ProductServiceConfig = {
  baseUrl?: string;
};

export type Configuration = {
  productService: ProductServiceConfig;
};

export const recoverConfiguration = (): Configuration => ({
  productService: {
    baseUrl: process.env.PRODUCT_SERVICE_BASE_URL,
  },
});
