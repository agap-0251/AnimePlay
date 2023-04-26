const Footer = () => {
  return (
    <footer id="footerSection" className="bg-dark text-center text-white">
      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Signin
        </button>
      </form>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <p className="text-white d-inline" href="#">
          AnimePlay
        </p>
      </div>
    </footer>
  );
};

export default Footer;
