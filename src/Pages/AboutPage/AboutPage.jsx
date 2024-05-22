import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const { language } = useContext(ThemeContext);
  return (
    <section className="container">
      <Helmet>
        <title>Maktabatul Amzad - About</title>
      </Helmet>
      <PageTitle title={["আমাদের সম্পর্কে", "About Us", "معلومات عنا"]} />

      <div className="mt-10">
        <h2 className="text-xl md:text-2xl lg:text-4xl uppercase font-semibold text-center text-primary">
          {language === 0
            ? "মাকতাবাতুল আমজাদ"
            : language === 1
            ? "Maktabaul Amjad"
            : "كتاب أمجد"}
        </h2>

        <div className="mt-5">
          <p className="text-center text-lg text-gray-600">
            {language === 0
              ? "দরসি, গায়রে দরসি সহ সব ধরণের কিতাব পাবেন আমাদের কাছে। কুরিয়ারে সারা দেশে কিতাব পাঠাই"
              : language === 1
              ? "You will get all kinds of books including Darsi, Gair Darsi from us. We send books all over the country by courier"
              : "سوف تحصل على جميع أنواع الكتب بما في ذلك دارسي، جير دارسي منا. نرسل الكتب إلى جميع أنحاء البلاد عن طريق البريد"}
          </p>

          <div className="flex justify-center items-center gap-5 mt-5">
            <div>
              <h4 className="text-xl font-medium mt-2">
                {language === 0
                  ? "আমাদের সাথে যোগাযোগ করুন"
                  : language === 1
                  ? "Contact With Us"
                  : "اتصل بنا"}
              </h4>

              <div className="flex items-center gap-5">
                <Link to="https://www.facebook.com/maktabatulamzadbd/">
                  <FaFacebookSquare className="text-6xl text-[#0866FF]" />
                </Link>
                <Link>
                  <FcGoogle className="text-6xl text-[#0866FF]" />
                </Link>
                <Link to="https://api.whatsapp.com/send?phone=8801749669155">
                  <FaSquareWhatsapp className="text-6xl text-[#25D366]" />
                </Link>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.32166866964855!2d90.41164839876703!3d23.706454784501535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b97f130f461d%3A0x408fe8787f7e50fd!2sChetona%20prokashoni!5e0!3m2!1sen!2sbd!4v1716358563401!5m2!1sen!2sbd"
                width="600"
                height="450"
                className="border-2 border-primary"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
