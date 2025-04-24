import { Product } from "../../types";

export const validateProductData = (product: Product): string[] => {
  const errors: string[] = [];

  // 상품 이름 유효성 검사
  if (!product.name || product.name.trim() === "") {
    errors.push("상품 이름은 필수입니다.");
  }

  // 상품 가격 유효성 검사
  if (product.price <= 0) {
    errors.push("상품 가격은 0보다 커야 합니다.");
  }

  // 재고 유효성 검사
  if (product.stock < 0) {
    errors.push("상품 재고는 음수일 수 없습니다.");
  }

  // 할인 유효성 검사
  product.discounts.forEach((discount, index) => {
    if (discount.quantity <= 0) {
      errors.push(`할인 ${index + 1}: 할인 수량은 1 이상이어야 합니다.`);
    }
    if (discount.rate < 0 || discount.rate > 1) {
      errors.push(`할인 ${index + 1}: 할인율은 0 이상 1 이하이어야 합니다.`);
    }
  });

  return errors;
};
