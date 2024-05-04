import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";

export default function EditWriter() {
  const navigate = useNavigate("");
  const writer = useLoaderData();
  const { writerId, name, image, desc } = writer;
  const axiosPubic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnwriter, enwriter, arwriter, bnDesc, enDesc, arDesc } = data;
    const updateWriter = {
      name: [bnwriter, enwriter, arwriter],
      desc: [bnDesc, enDesc, arDesc],
    };

    if (data.image.length > 0) {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      fetch(
        "https://api.imgbb.com/1/upload?key=e1f8cb2a3ec0064d89280dcbe819c1b7",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((imgRes) => {
          if (imgRes.success) {
            const imageUrl = imgRes.data.display_url;
            updateWriter.image = imageUrl;

            // addWriter
            axiosPubic
              .patch(`/editwriter/${writerId}`, updateWriter)
              .then((res) => {
                if (res.data.acknowledged) {
                  navigate("/admin/writerlist");
                }
              });
          }
        });
    } else {
      // addWriter
      updateWriter.image = image;
      axiosPubic.patch(`/editwriter/${writerId}`, updateWriter).then((res) => {
        if (res.data.acknowledged) {
          navigate("/admin/writerlist");
        }
      });
    }
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Edit Book</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <div className="mb-5">
                <label>লেখকের নাম বাংলায়</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[0]}
                  {...register("bnwriter")}
                />
              </div>
              <div className="mb-5">
                <label>লেখকের নাম ইংরেজীতে</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[1]}
                  {...register("enwriter")}
                />
              </div>
              <div className="mb-5">
                <label>লেখকের নাম আরবীতে</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[2]}
                  {...register("arwriter", { required: true })}
                />
                {errors.arwriter && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
              </div>
            </div>
            <div className="col-span-2">
              <div className="border border-primary">
                <p className="mb-2">লেখকের ছবি</p>
                <img src={image} alt="" />
                <input
                  type="file"
                  src=""
                  {...register("image")}
                  className=""
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-5">
              <p>লেখকের ব্যাপারে বাংলায়</p>
              <textarea
                defaultValue={desc[0]}
                {...register("bnDesc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
            <div className="col-span-5">
              <p>লেখকের ব্যাপারে ইংরেজীতে</p>
              <textarea
                defaultValue={desc[1]}
                {...register("enDesc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
            <div className="col-span-5">
              <p>লেখকের ব্যাপারে আরবীতে</p>
              <textarea
                defaultValue={desc[2]}
                {...register("arDesc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Edit Writer"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
