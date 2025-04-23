import React from "react";
import CouponForm from "./CouponForm";
import CouponList from "./CouponList";
import { Coupon } from "../../../types";

interface IProps {
  newCoupon: Coupon;
  setNewCoupon: React.Dispatch<React.SetStateAction<Coupon>>;
  handleAddCoupon: () => void;
  coupons: Coupon[];
}

const CouponManager = ({
  newCoupon,
  setNewCoupon,
  handleAddCoupon,
  coupons,
}: IProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        <CouponForm
          newCoupon={newCoupon}
          setNewCoupon={setNewCoupon}
          handleAddCoupon={handleAddCoupon}
        />
        <CouponList coupons={coupons} />
      </div>
    </div>
  );
};

export default CouponManager;
