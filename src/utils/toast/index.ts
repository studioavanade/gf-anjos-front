import { toast } from "react-toastify";
import { TOAST_DURATION } from "../../constants";

export const showErrorToast = (msg: string) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: TOAST_DURATION,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showSuccessToast = (msg: string) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: TOAST_DURATION,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
