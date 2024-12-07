import moon from './img/moon.png'
import sun from './img/sun.png'
const DarkMode = () =>{

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme","dark");
    };

    
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme","light");

    };

    const toggleTheme = e => {
        if (e.target.checked) setLightMode();
        else setDarkMode();
    }

    return (
        <div className="dark-mode">
            <input type="checkbox"
            className="dark-mode-input"
            id="darkmode-toggle" 
            onChange={toggleTheme}/>

            <label className="dark-mode-label" for ='darkmode-toggle'>
                <img src={sun} alt="" />
            </label>
        </div>
    )
}

export default DarkMode;