import { FaPlay, FaSearch } from 'react-icons/fa';

function App() {

  return (
    <div className="main-container">

      <div className="second-container">
        {/* navbar  */}
        <nav className="navbar">

          <div className="logo-part">
            <img
              src="./logo.png"
              alt="log"
            />
            <p>grapeslab</p>
          </div>


          <div>
            <ul className="nav-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Tracks</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="" >Workshops</a>
              </li>
            </ul>
          </div>


          <div id="auth">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontWeight: '600' }}>
              <p>Sign Up</p>
              <p id="signIn">Sign In</p>
            </div>

            <div>
              <p id='search-icon'><FaSearch></FaSearch></p>
            </div>
          </div>

        </nav>

        <div className="banner">

          <div id="banner-content">
            <h1>Get where you're going faster with</h1>
            <h2>Grapeslab</h2>
            <p>Expand your skills in development, testing, analysis, and designing.</p>

            <div id="button-div">
              <button id="startNowBtn">Start Now</button>
              <div id='play-div'>
                <p id='video-icon'><FaPlay></FaPlay></p>
                <p>Watch Video</p>
              </div>
            </div>
          </div>

          <div id="banner-img">
            <img src="./public/banner.png" alt="" />
          </div>

        </div>


      </div>


    </div>
  )
}

export default App
