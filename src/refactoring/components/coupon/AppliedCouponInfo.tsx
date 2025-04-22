import { Coupon } from "../../../types";

interface IProps {
  selectedCoupon: Coupon | null;
}

const AppliedCouponInfo = ({ selectedCoupon }: IProps) => {
  if (!selectedCoupon) return null;

  const discountText =
    selectedCoupon.discountType === "amount"
      ? `${selectedCoupon.discountValue.toLocaleString()}원`
      : `${selectedCoupon.discountValue}%`;

  return (
    <p className="text-green-600">
      적용된 쿠폰: {selectedCoupon.name}({discountText} 할인)
    </p>
  );
};

export default AppliedCouponInfo;
