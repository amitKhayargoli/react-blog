import './styles/LandingPage.css'
import './DarkMode.css'
import DarkMode from "./DarkMode";
// import blog from './blog';
import design from './assets/design.png'



function LandingPage(){
    return  <div className="container">
        
    <div className="nav">

        <h1>Blogger</h1>

        <ul>
            <li> <a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Trending</a></li>
            <li><a href="">Contact</a></li>
        </ul>

        <span>
        <button className="signin-btn btn">Sign in</button>
        <DarkMode/>
        </span>

    </div>
    
    <h1 className='Main'>Write your ideas and share</h1>
    <h1 className='Main'>them to the world</h1>



    <div className="search-bar">

    <input className='Search' type="text" placeholder='Search Topics..'/>

        <button className='search-btn btn'>Search Now</button>

    </div>

    <div className="blog">


    <div className="filter-div">

    <button className='category'>Technology</button>
    <button className='category'>Nature</button>
    <button className='category'>Thoughts</button>

    </div>


    <div className="blog-div">

    <div className="blog-post">

        <img src={design} alt="" />

        <h3>
        Top 5 best website resources for best UI/UX designs
        </h3>
    </div>

    <div className="blog-post">

<img src={design} alt="" />

<h3>
Top 5 best website resources for best UI/UX designs
</h3>
</div>

<div className="blog-post">

<img src={design} alt="" />

<h3>
Top 5 best website resources for best UI/UX designs
</h3>
</div>

    </div>


    </div>

</div>


}

export default LandingPage;