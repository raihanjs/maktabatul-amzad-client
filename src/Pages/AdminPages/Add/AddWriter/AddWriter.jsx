import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";

export default function AddWriter() {
  const navigate = useNavigate("");
  const axiosPubic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnwriter, enwriter, arwriter, bnDesc, enDesc, arDesc } = data;
    const newWriter = {
      name: [bnwriter, enwriter, arwriter],
      desc: [bnDesc, enDesc, arDesc],
      writerId: `writer${Math.ceil(Math.random() * 1000)}`,
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
            newWriter.image = imageUrl;

            // addWriter
            axiosPubic.post("/addwriter", newWriter).then((res) => {
              if (res.data.acknowledged) {
                navigate("/admin/writerlist");
              }
            });
          }
        });
    } else {
      // addWriter
      axiosPubic.post("/addwriter", newWriter).then((res) => {
        if (res.data.acknowledged) {
          navigate("/admin/writerlist");
        }
      });
    }
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Add Writer</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="লেখকের নাম বাংলায়"
                  {...register("bnwriter")}
                />
              </div>
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="লেখকের নাম ইংরেজীতে"
                  {...register("enwriter")}
                />
              </div>
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="লেখকের নাম আরবীতে"
                  {...register("arwriter", { required: true })}
                />
                {errors.arwriter && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
              </div>
            </div>
            <div className="col-span-2">
              <div className="border py-12 border-primary">
                <input
                  type="file"
                  src=""
                  {...register("image")}
                  className="mt-12 ml-12"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-5">
              <textarea
                placeholder="লেখকের ব্যাপারে বাংলায় লিখুন"
                {...register("bnDesc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
            <div className="col-span-5">
              <textarea
                placeholder="লেখকের ব্যাপারে ইংরেজীতে লিখুন"
                {...register("enDesc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
            <div className="col-span-5">
              <textarea
                placeholder="লেখকের ব্যাপারে আরবীতে লিখুন"
                {...register("arDesc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="লেখক অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
