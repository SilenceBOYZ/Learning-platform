import CartItem from "../features/cart/CartItem";
import CartSlide from "../features/cart/CartSlide";
import Heading from "../ui/Heading";

function CartPage() {
  return (
    <div className="py-8 mx-auto max-w-[90rem]">
      <Heading custom="text-4xl">Giỏ hàng</Heading>
      <div className="flex gap-10 py-8">
        <div className="w-[75%] mt-2">
          <Heading custom="mb-4">Có 4 Khóa học trong giỏ hàng của bạn</Heading>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="w-[25%]">
          <div className="pb-3 border-b-[1px] border-neutral-300">
            <Heading custom="text-xl mb-2">Tổng</Heading>
            <p className="text-4xl font-bold">350,000</p>
            <s className="text-neutral-500">3.500.000</s>
            <p className="font-medium mb-4">Giảm 90%</p>
            <button className="w-[100%] flex justify-center bg-violet-600 text-white text-xl py-2">
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
      <CartSlide />
    </div>
  );
}

export default CartPage;
