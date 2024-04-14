import { FocusEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IProductPrice, IFormData } from "./interface";
import { IProduct } from "../../interface";
import "react-toastify/dist/ReactToastify.css";

export const useAddProduct = (productPrice: IProduct[]) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  const errormessage: string = errors?.phoneNumber?.message!;

  const formatPhoneNumber = (input: string) => {
    let rawDigits = input.replace(/[^\d+]/g, "");
    if (rawDigits && rawDigits.startsWith("7")) {
      rawDigits = "+7" + rawDigits.slice(1);
    } else if (rawDigits && !rawDigits.startsWith("+7")) {
      rawDigits = "+7" + rawDigits.replace(/^\D+/, "");
    }

    let digits = rawDigits.slice(2).replace(/\D/g, "");

    let formattedNumber = rawDigits.slice(0, 2);

    if (digits.length) {
      formattedNumber += `(${digits.slice(0, 3)}`;
      if (digits.length > 3) {
        formattedNumber += `)${digits.slice(3, 6)}`;
        if (digits.length > 6) {
          formattedNumber += `-${digits.slice(6, 8)}`;
          if (digits.length > 8) {
            formattedNumber += `-${digits.slice(8, 10)}`;
          }
        }
      }
    }

    return formattedNumber;
  };

  const onSubmit = (data: IFormData) => {
    if (productPrice.length) {
      const cart = productPrice.map((productPrice) => ({
        id: productPrice.id,
        quantity: productPrice.count,
      }));

      const requestBody = {
        phone: data.phoneNumber,
        cart: cart,
      };

      fetch("http://o-complex.com:1337/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then(() => {
          toast("Wow so easy!");
          setValue("phoneNumber", "");
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  const phoneNumber = watch("phoneNumber", "");

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget || relatedTarget.tagName.toLowerCase() !== "button") {
      setValue("phoneNumber", "");
    }
  };

  useEffect(() => {
    if (!phoneNumber) return;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    setValue("phoneNumber", formattedPhoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    const phoneNumber = watch("phoneNumber");
    if (phoneNumber?.length === 16) {
      localStorage.setItem("phone", JSON.stringify(phoneNumber));
    }
  }, [watch("phoneNumber")]);

  useEffect(() => {
    const phone: string | null = localStorage.getItem("phone");
    if (phone) setValue("phoneNumber", phone);
  }, []);

  return {
    onSubmit,
    handleSubmit,
    register,
    setValue,
    handleBlur,
    errors,
    phoneNumber,
    errormessage,
  };
};
