import React from "react";
import { Coupon } from "../../../types";

interface IProps {
  coupons: Coupon[];
  onSelect: (coupon: Coupon) => void;
}

const CouponSelector = ({ coupons, onSelect }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value);
    if (!isNaN(index)) {
      onSelect(coupons[index]);
    }
  };

  return (
    <select onChange={handleChange} className="w-full p-2 border rounded mb-2">
      <option value="">쿠폰 선택</option>
      {coupons.map((coupon, index) => (
        <option key={coupon.code} value={index}>
          {coupon.name} -{" "}
          {coupon.discountType === "amount"
            ? `${coupon.discountValue.toLocaleString()}원`
            : `${coupon.discountValue}%`}
        </option>
      ))}
    </select>
  );
};

export default CouponSelector;
