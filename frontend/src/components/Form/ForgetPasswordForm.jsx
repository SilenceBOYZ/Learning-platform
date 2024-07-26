import Heading from "../../ui/Heading";
import Button from "../../ui/button/Button";
import Input from "../../ui/controlComponent/Input";

function ForgetPasswordForm() {
  return (
    <form className="px-6 py-6 bg-slate-100 w-[30rem] max-w-[30rem] space-y-6">
      <Heading custom="uppercase text-xl -skew-x-12 text-center">
        Quên mật khẩu
        <span className="inline-block text-center w-full text-sm font-normal normal-case ">
          Nhập email của bạn và chúng tối sẽ gửi mã khôi phục
        </span>
      </Heading>

      <div className="space-y-4">
        <Input type="email" name="Nhập địa chỉ email"></Input>

        <Input type="text" name="Nhập mã xác nhận">
          <Button custom="rounded-md absolute right-1 top-1" btnColor="bg-red-600">Gửi mã</Button>
        </Input>

        <Button custom="rounded-sm w-full" btnColor="bg-violet-700">
          Đặt lại mật khẩu
        </Button>
      </div>
    </form>
  );
}

export default ForgetPasswordForm;
