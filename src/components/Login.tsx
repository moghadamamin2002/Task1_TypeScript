import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const EmailUser = "aminmoghadam@gmail.com";
  const passwordUser = "Amin2002@";
  const navigate = useNavigate();
  const [Email, setEmail] = useState<string>("");
  const [Password, setPssword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  console.log(EmailUser);
  console.log(passwordUser);


  useEffect(() => {
    const Login_condition = localStorage.getItem("LOGINED");

    if (Login_condition == "true") {
      navigate("/display");
    }
  }, [navigate]);

  const Submit = () => {
    if (Email == EmailUser && Password == passwordUser) {
      
      localStorage.setItem("LOGINED", "true");
      navigate("/display");
    } else {
      setMessage("the Email or password is incorrect .");
    }
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control form-control-lg"
                        value={Email}
                        onChange={(event) =>
                          setEmail(String(event.target.value))
                        }
                      />
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control form-control-lg"
                        value={Password}
                        onChange={(event) =>
                          setPssword(String(event.target.value))
                        }
                      />
                    </div>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={Submit}
                    >
                      Login
                    </button>
                  </div>

                  <div>{message}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
