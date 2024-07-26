import Button from "../../ui/button/Button";
import InputFile from "../../ui/controlComponent/InputFile";
import Option from "../../ui/controlComponent/Option";
import Select from "../../ui/controlComponent/Select";
import Heading from "../../ui/Heading";

function LectureRegistedForm() {
  return (
    <form className="px-6 py-6 bg-slate-100 w-[30rem] max-w-[30rem] space-y-4">
      <Heading custom="uppercase text-xl -skew-x-12 text-center">
        Đăng ký làm giảng viên
      </Heading>

      <Select>
        <Option value="" defaultValue={true}>
          Trình độ chuyên môn
        </Option>
        <Option value="doctor">Tiến sĩ</Option>
        <Option value="master">Thạc sĩ</Option>
        <Option value="bachelor">Cử nhân</Option>
      </Select>

      <Select>
        <Option value="" defaultValue={true}>
          Lĩnh vực giảng dạy
        </Option>
        <Option value="doctor">Công nghệ thông tin</Option>
        <Option value="master">Tài chính marketing</Option>
        <Option value="bachelor">Truyền thông đa phương tiện</Option>
      </Select>

      <InputFile accept="image/png, image/jpeg, .pdf">
        <span className="font-medium">
          Bằng tốt nghiệp{" "}
          <span className="font-normal">(Có chức nhận của nơi cấp bằng)</span>
        </span>
      </InputFile>

      <div className="space-y-4">
        <Button custom="rounded-sm w-full" btnColor="bg-violet-700">
          Đăng ký
        </Button>
      </div>
    </form>
  );
}

export default LectureRegistedForm;
