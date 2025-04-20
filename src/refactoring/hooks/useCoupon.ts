import { useState } from "react";
import { Coupon } from "../../types.ts";

export const useCoupon = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState(initialCoupons);

  const handleCouponAdd = (newCoupon: Coupon) => {
    setCoupons((prevCoupons) => [...prevCoupons, newCoupon]);
  };

  return { coupons: coupons, addCoupon: handleCouponAdd };
};
