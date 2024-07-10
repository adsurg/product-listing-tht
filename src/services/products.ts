import axios from "axios";
import { Configuration } from "../configuration/configuration";
import { Product } from "./model/product";
import { url } from "inspector";

export const listProducts = async (
  configuration: Configuration
): Promise<Product[]> => {
  const response = await axios.get(
    configuration.productService.baseUrl + "/products.json"
  );

  return response.data as Product[];
};
