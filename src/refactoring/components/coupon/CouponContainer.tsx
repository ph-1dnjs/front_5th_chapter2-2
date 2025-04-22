import { Coupon } from "../../../types";
import AppliedCouponInfo from "./AppliedCouponInfo";
import CouponSelector from "./CouponSelector";

interface IProps {
  coupons: Coupon[];
  selectedCoupon: Coupon | null;
  applyCoupon: (coupon: Coupon) => void;
}

function CouponContainer({ coupons, selectedCoupon, applyCoupon }: IProps) {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <CouponSelector coupons={coupons} onSelect={applyCoupon} />
      <AppliedCouponInfo selectedCoupon={selectedCoupon} />
    </div>
  );
}

export default CouponContainer;
