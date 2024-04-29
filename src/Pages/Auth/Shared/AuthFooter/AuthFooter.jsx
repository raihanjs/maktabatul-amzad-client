import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuthFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center py-2">
          {/* Social Links */}
          <div className="order-2 md:order-1 flex justify-center items-center space-x-2 ">
            <Link>
              <FaFacebookSquare className="text-2xl text-gray-600 hover:text-gray-800" />
            </Link>
            <Link>
              <FaInstagram className="text-2xl text-gray-600 hover:text-gray-800" />
            </Link>
            <Link>
              <FaWhatsapp className="text-2xl text-gray-600 hover:text-gray-800" />
            </Link>
          </div>
          {/* Business Links */}
          <div className="order-1 md:order-2 flex justify-center items-center space-x-3">
            <Link className="text-sm">PRIVACY POLICY</Link>
            <Link className="text-sm">TERMS & CONDITIONS</Link>
            <Link className="text-sm">BLOG</Link>
          </div>
          {/* Copyright */}
          <div className="order-3 md:order-3">
            <p className="text-xs">&copy; maktabatul-amzad.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
