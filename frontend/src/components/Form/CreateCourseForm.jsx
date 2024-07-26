import Button from "../../ui/button/Button";
import Input from "../../ui/controlComponent/Input";
import InputFile from "../../ui/controlComponent/InputFile";
import Option from "../../ui/controlComponent/Option";
import Select from "../../ui/controlComponent/Select";
import CenterLayout from "../../ui/layout/CenterLayout";

function CreateCourseForm() {
  return (
    <CenterLayout>
      <form className="w-[60rem] bg-white shadow-lg border-[1px] border-neutral-100 px-4 py-5 animate-[floatDown_.8s_ease-in-out_forwards]">
        <div className="flex gap-4 h-[22rem]">
          <div className="w-1/2 space-y-3">
            <Input
              custom="focus:border-violet-600 focus-within:border-violet-600"
              name="Khóa học lập trình cơ bản"
            >
              <span className="font-medium text-neutral-500">
                Tên khóa học:
              </span>
            </Input>
            <Input
              custom="focus:border-violet-600 focus-within:border-violet-600"
              name="350,000"
            >
              <span className="font-medium text-neutral-500">Giá tiền:</span>
            </Input>
            <textarea
              className="w-full border-2 px-4 py-2 h-36 resize-none rounded-md font-medium text-neutral-700 focus-within:outline-none focus:border-violet-600 focus-within:border-violet-600"
              placeholder="Thêm miêu tả"
            ></textarea>
            <InputFile />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <div className="border-2 rounded-md w-full h-[80%] overflow-hidden align-middle">
              <img
                className="h-[100%] w-full"
                src="https://i.ytimg.com/vi/PuOVqP_cjkE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1SyzuNeo3mI2cF9wD58tmE1Keng.jpg"
                alt="thumbnail_review"
              />
            </div>
            <div className="h-[20%]">
              <Select padding="p-2.5">
                <Option value="" defaultValue={true}>
                  Lĩnh vực giảng dạy
                </Option>
                <Option value="doctor">Công nghệ thông tin</Option>
                <Option value="master">Tài chính marketing</Option>
                <Option value="bachelor">Truyền thông đa phương tiện</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <Button btnColor="bg-red-700" custom="rounded-md">
            Hủy
          </Button>
          <Button btnColor="bg-violet-700" custom="rounded-md">
            Thêm
          </Button>
        </div>
      </form>
    </CenterLayout>
  );
}

export default CreateCourseForm;
