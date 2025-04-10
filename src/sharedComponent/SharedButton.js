import React from "react";

const SharedButton = ({ label ,variant = "primary", size = "fnt_16",basebtnstyle="basebtn" }) => {
  console.log("button",variant)
  const baseStyles = {
    basebtn: "primary_1",
  };
  // const generalstyle = {
  //   basebtn: "gnr_btn",
  // };
  const variantStyles = {
    btnstart: "btn_get_start",
    mail_btn: "text_mail",
    trans_btn: "btn_translat",
    demo_btn:"btn_demo",
    login_btn:"login_btn",
  };
  const sizeStyles = {
   fnt_12:"btn-font-12",
   fnt_14:"btn-font-14",
   fnt_16:"btn-font-16",
   fnt_18:"btn-font-18",
   fnt_20:"btn-font-20",
   fnt_22:"btn-font-22",
   fnt_24:"btn-font-24",
  };

  return (
    <button
      className={`${baseStyles[basebtnstyle]}  ${variantStyles[variant]} ${sizeStyles[size]} relative`}
    >
      <span className="relative">{label}</span>
    </button>
  );
};

export default SharedButton;
