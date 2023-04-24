import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-32 h-16 object-cover" />

        <button
          type="button"
          onClick={() => window.open("https://linktr.ee/AliSamir", "_blank")}
          className="black_btn"
        >
          Follow Me
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span style={{ color: "#ef4136" }}>Artificial Intelligence</span>
      </h1>
      <h2 className="desc">
        Make your reading easier with Summarly, an open-source tool that
        condenses long articles into brief and straightforward summaries.
      </h2>
    </header>
  );
};

export default Hero;
