import { useEffect } from "react";
import toastr from "toastr";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};

function useToastr() {
  useEffect(() => {
    const toastSuccess = (message) => toastr.success(message);
    const toastError = (message) => toastr.error(message);

    // return the functions that can be used to display toasts
    return { toastSuccess, toastError };
  }, []);

  return {};
}

export default useToastr;
