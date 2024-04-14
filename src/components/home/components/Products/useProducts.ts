import { useEffect, useState } from "react";

export const useProduct = () => {
  const [pageSize, setPageSize] = useState(20);
  const [products, setProducts] = useState([]);

  async function fetchProduct(pageSize: number) {
    const productResponse = await fetch(
      `http://o-complex.com:1337/products?page=1&page_size=${pageSize}`
    );
    return productResponse.json();
  }

  // Function to fetch products based on the current page size
  const loadProducts = async () => {
    const response = await fetchProduct(pageSize);
    if (response) {
      setProducts(response?.products);
    }
  };

  // Use useEffect to trigger a fetch when the pageSize changes
  useEffect(() => {
    loadProducts();
  }, [pageSize]);

  // Function to add more products
  const handleAddMoreProducts = () => {
    setPageSize((prev) => prev + 20);
  };




  return { products, handleAddMoreProducts };
};
