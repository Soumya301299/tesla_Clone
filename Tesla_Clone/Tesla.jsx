
import style from "./tesla.module.css"

const Tesla=()=>{
    return(
        <div>
            
        <section id={style.div}>
            <header className={style.nav1}>
            Tax credit up to $7,500 available for eligible vehicles. <a href="">Learn More</a>
            </header>
            <nav className={style.nav2}>

                <div className={style.logo}>
                <a href="">
                <svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
                </a>
                </div>

                <div className={style.navlist}>
                    <ol>
                        <li><div className={style.div1}></div></li>
                        <a href=""><li>Model S</li></a>
                        <a href=""><li>Model 3</li></a>
                        <a href=""><li>Model X</li></a>
                        <a href=""><li>Model Y</li></a>
                        <a href=""><li>Solar Roof</li></a>
                        <a href=""><li>Solar Panels</li></a>
                        <a href=""><li>Powerwall</li></a>
                        <li><div></div></li>
                        <a href=""><li>Shop</li></a>
                        <a href=""><li>Account</li></a>
                        <a href=""><li>Menu</li></a>
                    </ol>
                </div>
            </nav>
            <div id={style.main1}></div>
            <div id={style.main2}></div>
            <div id={style.main3}></div>
            <div id={style.main4}></div>

                
        {/* <section className={style.content}>
                <article>
                    <h1>Model Y</h1>
              <center>      <u>View Inventory</u></center>
                       </article>
                </section>

               <section className={style.links}>
                     <article>
                       <a className={style.custom} href="">custom order</a>
                        <a  className={style.existing}href="">existing delivery</a>
                    </article>
               
               </section> */}
        </section>
        <section id={style.div}>
        <footer className={style.foot}>
            <ol>
                <li>Tesla</li>
                <li>@2023</li>
                <li>Privacy & Lega</li>
                <li>Vehicle Recalls</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>News</li>
                <li>Engage</li>
                <li>Locations</li>
            </ol>
        </footer>
        </section>
    
    
    </div>
    )
}
export default Tesla
