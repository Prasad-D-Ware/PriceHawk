"use server";

import { scrapeAmazonProduct } from "../scrapper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scrapedProduct = scrapeAmazonProduct(productUrl);
  } catch (e: any) {
    throw new Error(`Failed to update/create Product : ${e.message}`);
  }
}
