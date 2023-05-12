import { toast } from "react-toastify";

export const successToast = (uname) => {
    return toast.success(`Signed in as ${uname}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
}

export const watchListToast = (name,isAdded) => {
    if(isAdded) {
        return toast.success(`${name} is successfully added to watchlist`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
    }
    else {
        return toast.success(`${name} is successfully removed from watchlist`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
}

