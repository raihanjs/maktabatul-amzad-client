import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function AddImporter() {
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const { bnImportedCountry, enImportedCountry, arImportedCountry } = data;
    const newImportedCountry = {
      name: [bnImportedCountry, enImportedCountry, arImportedCountry],
      countryId: `country${Math.ceil(Math.random() * 1000000)}`,
    };

    axiosPublic.post("/addimportedcountry", newImportedCountry).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Importer added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/importerlist");
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
        <h3 className="text-2xl font-bold">Add Importer</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="দেশের নাম বাংলায়"
              {...register("bnImportedCountry")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="দেশের নাম ইংরেজীতে"
              {...register("enImportedCountry")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="দেশের নাম আরবীতে"
              {...register("arImportedCountry", { required: true })}
            />
            {errors.arImportedCountry && (
              <span className="text-sm text-red">
                এই ঘরটি অবশ্যই পুরন করতে হবে
              </span>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="দেশ অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
