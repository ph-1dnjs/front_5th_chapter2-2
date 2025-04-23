import { Product } from "../../../types";
import NewProductForm from "./NewProductForm";

interface IProps {
  showNewProductForm: boolean;
  toggleShowNewProductForm: () => void;
  newProduct: Omit<Product, "id">;
  onChange: (product: Omit<Product, "id">) => void;
  onAdd: () => void;
}

const NewProductSection = ({
  showNewProductForm,
  toggleShowNewProductForm,
  newProduct,
  onChange,
  onAdd,
}: IProps) => {
  return (
    <>
      <button
        onClick={toggleShowNewProductForm}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewProductForm ? "취소" : "새 상품 추가"}
      </button>
      {showNewProductForm && (
        <NewProductForm
          newProduct={newProduct}
          onChange={onChange}
          onAdd={onAdd}
        />
      )}
    </>
  );
};

export default NewProductSection;
