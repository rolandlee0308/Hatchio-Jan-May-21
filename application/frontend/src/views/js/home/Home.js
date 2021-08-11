// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// Components
import Footer from "../global/Footer";
import PostJobs from "./PostJobs";
import SearchJobs from "./SeachJobs";

const Home = () => {
  return (
    <div className='wrapper-col-2 fill-page'>
      <div className='wrapper-row-3 col left-home'>
        <PostJobs />
        <Footer />
      </div>
      <div className='wrapper-row-3 col right-home'>
        <SearchJobs />
      </div>
    </div>
  );
};

export default Home;
