import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function EditImporter() {
  const navigate = useNavigate();
  const importedCountry = useLoaderData();
  const { _id, name } = importedCountry;

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnImportedCountry, enImportedCountry, arImportedCountry } = data;
    const editedImportedCountry = {
      name: [bnImportedCountry, enImportedCountry, arImportedCountry],
    };

    console.log(editedImportedCountry);

    axiosPublic
      .patch(`/editimportedcountry/${_id}`, editedImportedCountry)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Importer Updated",
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
        <h3 className="text-2xl font-bold">Edit Importer</h3>
      </div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label>ইমপোর্টার দেশ এর নাম বাংলায়</label>
            <input
              className="border w-full border-primary p-2"
              defaultValue={name[0]}
              {...register("bnImportedCountry")}
            />
          </div>
          <div className="mb-5">
            <label>ইমপোর্টার দেশ এর নাম ইংরেজীতে</label>
            <input
              className="border w-full border-primary p-2"
              defaultValue={name[1]}
              {...register("enImportedCountry")}
            />
          </div>
          <div className="mb-5">
            <label>ইমপোর্টার দেশ এর নাম আরবীতে</label>
            <input
              className="border w-full border-primary p-2"
              defaultValue={name[2]}
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
              value="আপডেট করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
