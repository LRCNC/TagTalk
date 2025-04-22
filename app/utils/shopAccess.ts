const allowed = ["littlerivercustoms.com", "dev-shop.myshopify.com"];
export function isShopAllowed(shopDomain) {
  return allowed.includes(shopDomain);
}
