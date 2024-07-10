import { describe, expect, it, beforeEach } from "vitest";
import nock from "nock";
import { Product } from "./model/product";
import { Configuration } from "../configuration/configuration";
import { listProducts } from "./products";

describe("product service returns entries", () => {
  const config: Configuration = {
    productService: { baseUrl: "https://a-uri.com" },
  };

  const aProduct: Product = {
    id: 1,
    title: "a-title",
    price: 123.45,
    description: "a-description",
    category: "a-category",
    image: "https://url.com/product-1.jpg",
    rating: {
      rate: 1.2,
      count: 345,
    },
  };

  beforeEach(() => {
    nock(config.productService.baseUrl!)
      .get(`/products.json`)
      .reply(200, [aProduct], {
        "content-type": "application/json",
      });
  });

  it("listProducts retrieves a product list", async () => {
    expect(await listProducts(config)).toEqual([aProduct]);
  });
});
