
function App() {

  return (
    <div className="main-container">

      <div className="second-container">

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
              <p>Icon</p>
            </div>
          </div>

        </nav>

        <div className="banner">
          banner
        </div>


      </div>


    </div>
  )
}

export default App
