import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { ThemeContext } from "../../Providers/ThemeProvider";
import LinkSmall from "../../Components/LinkSmall/LinkSmall";
import { Helmet } from "react-helmet-async";

export default function ErrorPage() {
  const { language } = useContext(ThemeContext);
  const { error, status } = useRouteError();
  return (
    <div className="h-screen flex items-center justify-center">
      <Helmet>
        <title>Maktabatul Amzad - ErrorPage</title>
      </Helmet>
      <div className="text-center">
        <p className="text-6xl font-bold mb-5">{status}</p>
        <p>
          <span>{error?.message.slice(20)} &nbsp;</span>
          <span>
            {language === 0
              ? "পেজটি খুঁজে পাওয়া যায়নি"
              : language === 1
              ? "The page could not be found"
              : "لا يمكن العثور على الصفحة"}
          </span>
        </p>
        <LinkSmall text="Go back to home" link="/" />
      </div>
    </div>
  );
}
