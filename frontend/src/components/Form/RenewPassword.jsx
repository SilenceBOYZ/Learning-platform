import Heading from "../../ui/Heading";
import Button from "../../ui/button/Button";
import PasswordInput from "../../ui/controlComponent/PasswordInput";

function RenewPassword() {
  return (
    <form className="px-6 py-6 bg-slate-100 w-[30rem] max-w-[30rem] space-y-6">
      <Heading custom="uppercase text-xl -skew-x-12 text-center">
        Đổi lại mật khẩu
        <span className="inline-block text-center w-full text-sm font-normal normal-case ">
          Hãy lưu mật khẩu vào nơi nào đó để không quên bên nhé 😊
        </span>
      </Heading>

      <div className="space-y-4">
        <PasswordInput name="Điền mật khẩu mới" key="Password"/>
        <PasswordInput name="Xác nhập lại mật khẩu" key="ConfirmPassword" />
        <Button custom="rounded-sm w-full" btnColor="bg-violet-700">
          Đổi lại mật khẩu
        </Button>
      </div>
    </form>
  );
}

export default RenewPassword;
