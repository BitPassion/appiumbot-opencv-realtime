import { useState, useEffect } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import LogoImg from "../../assets/logo_origin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
  },
});

function Login() {
  const [isActivated, setIsActivated] = useState(false);
  const [search, setSearch] = useState("");
  const history = useNavigate();
  const classes = useStyles();

  useEffect(() => {
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
      hideMethod: "fadeOut",
    };
  }, []);

  useEffect(() => {
    if(localStorage.getItem("activate_info")){
      history('/dashboard', {state:JSON.parse(localStorage.getItem("activate_info")).stuff})
    }
  }, []);

 
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const instance = axios.create({
    baseURL: 'http://localhost:4000' 
  });

  const handleSubmit = () => {
    instance
      .post("/search", {
        search: search,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("activate_info",JSON.stringify(response.data[0]) )
        history('/dashboard', {state:response.data[0].stuff})
        toastr.success("Congratulation!");
      })
      .catch((error) => {
        toastr.error("This key doensn't exist");
      });

    setSearch("");
  };
  return (
    <div className="p-8 relative">
      <img className="w-36" src={LogoImg} alt="logo" />
      <div
        style={{ height: "510px" }}
        className="bg-side max-w-md rounded-2xl m-auto p-12"
      >
        <h4 className="text-white font-semibold text-3xl text-center">
          Activation License
        </h4>
        <div className="flex flex-col mt-32">
          <TextField
            onChange={handleSearchChange}
            value={search}
            color="white"
            label="Type here..."
            size="small"
            variant="outlined"
          />
          <div className="mt-8">
           
            <Button
              onClick={handleSubmit}
              className="bg-button w-full"
              variant="text"
              classes={{ root: classes.root }}
              size="medium"
              color="white"
            >
              Submit
            </Button>
          </div>
          <div className="mt-8">
            <Button
              className="bg-button w-full"
              size="medium"
              variant="text"
              classes={{ root: classes.root }}
              color="white"
            >
              Get License
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;