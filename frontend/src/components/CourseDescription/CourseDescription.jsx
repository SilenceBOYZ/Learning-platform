import Description from "../../ui/Description";
import Heading from "../../ui/Heading";
import ListDescription from "./ListDescription";

function CourseDescription() {
  return (
    <section className="mt-10 space-y-4 font-medium text-neutral-500">
      <Heading>Mô tả khóa học</Heading>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        obcaecati at provident non eligendi dicta placeat vero nostrum ipsum
        natus dolorem dignissimos quae, amet eum! Aliquam minus perspiciatis sed
        sint ipsa. Voluptate eveniet magni dolorem officiis repellendus veniam,
        neque nostrum provident reiciendis asperiores. Minus beatae quam
        mollitia, neque saepe reprehenderit.
      </Description>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        obcaecati at provident non eligendi dicta placeat vero nostrum ipsum
        natus dolorem dignissimos quae, amet eum! Aliquam minus perspiciatis sed
        sint ipsa. Voluptate eveniet magni dolorem officiis repellendus veniam,
        neque nostrum provident reiciendis asperiores. Minus beatae quam
        mollitia, neque saepe reprehenderit.
      </Description>
      <Heading>Bạn sẽ được học</Heading>
      <ul className="grid grid-cols-2 gap-8 box-border px-4">
        <ListDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto atque
          vero illo at reiciendis reprehenderit neque fugit laboriosam natus.
          Tempora?
        </ListDescription>
        <ListDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto atque
          vero illo at reiciendis reprehenderit neque fugit laboriosam natus.
          Tempora?
        </ListDescription>
        <ListDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto atque
          vero illo at reiciendis reprehenderit neque fugit laboriosam natus.
          Tempora?
        </ListDescription>
        <ListDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto atque
          vero illo at reiciendis reprehenderit neque fugit laboriosam natus.
          Tempora?
        </ListDescription>
      </ul>
    </section>
  );
}

export default CourseDescription;
