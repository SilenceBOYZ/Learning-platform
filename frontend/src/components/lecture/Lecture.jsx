import { IoMdPlayCircle } from "react-icons/io";
import Heading from "../../ui/Heading";
import Description from "../../ui/Description";

function Lecture() {
  return (
    <section className="mt-10 space-y-8 font-medium text-neutral-500">
      <Heading>Thông tin giảng viên</Heading>
      <div className="flex gap-4">
        <div className="avatar flex-col space-y-4 w-[40%]">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <ul className="space-y-1">
            <li>
              <p className="flex items-center gap-1">
                <IoMdPlayCircle size={20} className="text-neutral-400" />
                <span className="font-medium text-neutral-500">2 Khóa học</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="text-violet-700">Thanh Trí</h4>
            <p className="text-neutral-400 text-sm">
              Thạc sĩ công nghệ thông tin
            </p>
          </div>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            obcaecati at provident non eligendi dicta placeat vero nostrum ipsum
            natus dolorem dignissimos quae, amet eum! Aliquam minus perspiciatis
            sed sint ipsa. Voluptate eveniet magni dolorem officiis repellendus
            veniam, neque nostrum provident reiciendis asperiores. Minus beatae
            quam mollitia, neque saepe reprehenderit.
          </Description>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            obcaecati at provident non eligendi dicta placeat vero nostrum ipsum
            natus dolorem dignissimos quae, amet eum! Aliquam minus perspiciatis
            sed sint ipsa. Voluptate eveniet magni dolorem officiis repellendus
            veniam, neque nostrum provident reiciendis asperiores. Minus beatae
            quam mollitia, neque saepe reprehenderit.
          </Description>
        </div>
      </div>
    </section>
  );
}

export default Lecture;
