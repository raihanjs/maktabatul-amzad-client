import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function AddTranslator() {
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const { bnTranslator, enTranslator, arTranslator } = data;
    const newTranslator = {
      name: [bnTranslator, enTranslator, arTranslator],
      translatorId: `translator${Math.ceil(Math.random() * 1000000)}`,
    };

    axiosPublic.post("/addtranslator", newTranslator).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Translator added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/translatorlist");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Add Writer</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="ট্রান্সলেটর এর নাম বাংলায়"
              {...register("bnTranslator")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="ট্রান্সলেটর এর নাম ইংরেজীতে"
              {...register("enTranslator")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="ট্রান্সলেটর এর নাম আরবীতে"
              {...register("arTranslator", { required: true })}
            />
            {errors.arTranslator && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
          </div>
          <div>
            <input
              type="submit"
              value="ট্রান্সলেটর অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
