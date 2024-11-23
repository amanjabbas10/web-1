import img1 from './images/logo 2.png';
import img2 from './images/21.png';
import img3 from './images/logo C.webp';
import img4 from './images/c-sharp-350x350.webp';
import img5 from './images/html.webp';
import img6 from './images/css222.jpg';
import img7 from './images/sql.webp';
import img8 from './images/java.webp';
import img9 from './images/react 678.webp';
import img10 from './images/icons-hero.webp';
import img11 from './images/rest.jpg';
import img12 from './images/home1.jpg';
import img13 from './images/about-img.png';
import img14 from './images/sofa 2.webp';
import img15 from './images/0001.png';
import img16 from './images/about 01011.webp';
import img17 from './images/imgggg2.webp';
import img18 from './images/c111.jpg';
const Web = () => {
    return (
        <div>
            <nav className="nav1">
                <img src={img1} />
                <a href="#home">Home</a>
                <a href="#Skill">Skill</a>
                <a href="#Projeckt">Projeckt</a>
                <a href="#servier">Servier</a>
                <a href="#learning">Learning</a>
                <a href="#contac us">Contac US</a>

                <button className='btn1'>login</button>
                <button className='btn2'>Sign in</button>
            </nav>
            <div className='background1'>
                <div className='background2'>
                    <div className='background3'>
                        <h1>
                            I,M <span style={{ color: "#5cace5" }}>Amanj Abbas Akray </span>
                            full Stack Devlopment
                            Program
                        </h1>
                        <p>"Exploring new ideas and embracing challenges is often the path to growth and success. The journey may be filled with learning curves, unexpected obstacles, and moments of self-discovery, but each step forward brings invaluable experience. By cultivating resilience and a passion for improvement, we can transform every setback into an opportunity for development. In this way, even the most</p>
                        <button className='btn3'>My GitHub</button>
                        <button className='btn4'>Right Now</button>
                    </div>
                </div>
                <img src={img2} />
            </div>

            {/* Part a About  */}
            <h1 id='Skill' style={{ fontSize: "45px", textAlign: "center", marginTop: "3.3rem", letterSpacing: "3px" }}>
                My Skill
            </h1>
            <hr className='hr1' />
            <div className='container'>
                <div className='row'>

                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "170px", marginLeft: "2rem", marginTop: "1rem" }} src={img3} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                C++
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "190px", marginLeft: "1rem", marginTop: "1rem" }} src={img4} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                C#
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "170px", marginLeft: "2rem", marginTop: "2.1rem" }} src={img5} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                Html
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "160px", marginLeft: "2rem", marginTop: "1rem" }} src={img6} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                Css
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "170px", marginLeft: "2rem", marginTop: "1rem" }} src={img7} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                SQl
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "135px", marginLeft: "2rem", marginTop: "1rem" }} src={img8} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                Java
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "180px", marginLeft: "2rem", marginTop: "1rem" }} src={img9} />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                React
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem" }}>
                        <img style={{ maxWidth: "200px", marginLeft: "1rem", marginTop: "1rem" }} src={img10} />
                        <br />
                        <hr />
                        <div className='card-body'>
                            <h3>
                                Bootstrap
                            </h3>
                            <p>
                                Freepik offers a free vector icon in PNG format (various sizes) with a blue color scheme, featuring
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <h1 id='Projeckt' style={{ fontSize: "45px", textAlign: "center", marginTop: "3.3rem", letterSpacing: "3px" }}>
                My Projeckt
            </h1>
            <hr className='hr1' />
            <div className='container'>
                <div className='row'>

                    <div className='card' style={{ width: "15rem", marginLeft: "6rem" }}>
                        <img style={{ marginTop: "1rem", borderRadius: "5px" }} src={img11} />
                        <div className='card-body'>
                            <h5>
                                Restoran Projeckt
                            </h5>
                            <button className='btn-card'>
                                <a className='btn-a' href='https://amanjabbas10.github.io/full-website-04' target='blank'>
                                    Vist Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem", marginLeft: "6rem" }}>
                        <img style={{ marginTop: "1rem", borderRadius: "5px" }} src={img12} />
                        <br />
                        <div className='card-body'>
                            <h5>
                                Mercedes-Benz Projeckt
                            </h5>
                            <button className='btn-card'>
                                <a className='btn-a' href='https://amanjabbas10.github.io/full-website-03' target='blank'>
                                    Vist Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem", marginLeft: "6rem" }}>
                        <img style={{ marginTop: "1rem", borderRadius: "5px" }} src={img13} />
                        <div className='card-body'>
                            <h5>
                                Travel Projeckt
                            </h5>
                            <button className='btn-card'>
                                <a className='btn-a' href='https://amanjabbas10.github.io/full-Website-02/' target='blank'>
                                    Vist Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem", marginLeft: "6rem" }}>
                        <img style={{ marginTop: "1rem", borderRadius: "5px" }} src={img14} />
                        <div className='card-body'>
                            <h5 style={{ textTransform: "capitalize" }}>
                                Design home Projeckt
                            </h5>
                            <button className='btn-card'>
                                <a className='btn-a' href='https://amanjabbas10.github.io/full-website-01' target='blank'>
                                    Vist Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem", marginLeft: "6rem" }}>
                        <img style={{ marginTop: "1rem", borderRadius: "5px" }} src={img15} />
                        <br />
                        <br />
                        <br />
                        <div className='card-body'>
                            <h5>
                                Brand Projeckt
                            </h5>
                            <button className='btn-card'>
                                <a className='btn-a' href='https://amanjabbas10.github.io/full-website-01' target='blank'>
                                    Vist Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='card' style={{ width: "15rem", marginLeft: "6rem" }}>
                        <img style={{ marginTop: "1rem", borderRadius: "5px" }} src={img17} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='card-body'>
                            <h5>
                                My Website Projeckt
                            </h5>
                            <button className='btn-card'>
                                <a className='btn-a' href='https://amanjabbas10.github.io/full-website-01' target='blank'>
                                    Vist Site
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <h1 id='servier' style={{ fontSize: "45px", textAlign: "center", marginTop: "3.3rem", letterSpacing: "3px" }}>
                Servier
            </h1>
            <hr className='hr1' />

            <div className='about-work' >
                <img src={img16} />
                <div className='about-w' >
                    <div className='about'>
                        <h2>
                            About work
                        </h2>
                        <p>
                            A programmer, also known as a computer programmer or coder, is
                            <span style={{ color: "#5cace5" }}> A professional who writes</span>, tests, and maintains the detailed instructions,<span style={{ color: "#5cace5" }}> called computer programs</span>, that computers must follow to perform their functions. <span style={{ color: "#5cace5" }}>Programmers design</span>, develop, and test software, ensuring it meets industry standards and best practices in performance, reliability, and security.
                            <br />
                            <br />
                            <b>
                                Work Environment:
                            </b>
                            <br />
                            <u>
                                Programmers work in various settings including
                            </u>
                            <br />
                            <li>
                                Corporate information technology (IT) departments.
                            </li>
                            <li>
                                Consulting companies (as contractors).
                            </li>
                            <li>
                                Small service firms.
                            </li>
                            <li>
                                Government entities.
                            </li>
                            <li>
                                Big software companies.
                            </li>
                        </p>
                        <button style={{ textTransform: "capitalize", marginLeft: "1rem" }} className='btn-11'>
                            see More
                        </button>
                    </div>
                </div>
            </div>
            <h1 id='learning' style={{ fontSize: "45px", textAlign: "center", marginTop: "3.3rem", letterSpacing: "3px" }}>
                Learning
            </h1>
            <hr className='hr1' />
            <p className='p--1'>
                How Learning Programing Step By Step.
            </p>
            <h2 className='f-h2'>
                First You Need Learning <span style={{ color: "#5cace5" }}> Html</span> And <span style={{ color: "#5cace5" }}> Css</span>
            </h2>
            <img className='f-img' src={img5} />
            <img className='f-img1' src={img6} />
            <br />

            <i class="fa-solid fa-arrow-trend-down"></i>

            <h2 className='f-h3'>
                Second You Need Learning <span style={{ color: "#5cace5" }}> Java</span> And <span style={{ color: "#5cace5" }}> Bootstrap</span>
            </h2>
            <img className='f-img11' src={img8} />
            <img className='f-img10' src={img10} />
            <br />
            <div className='flip'>
                <i class="fa-solid fa-arrow-trend-down"></i>
            </div>
            <br />
            <h2 className='f-h2' style={{ marginTop: "2rem" }}>
                Three You Need Learning <span style={{ color: "#5cace5" }}>React</span>
            </h2>
            <img className='f-img00' src={img9} />
            <br />
            <div className='i-12'>
                <i class="fa-solid fa-arrow-trend-down"></i>
            </div>
            <br />
            <h2 className='f-h3'>
                Finally You Need Learning <span style={{ color: "#5cace5" }}>React Netive</span>
            </h2>
            <img className='f-img101' src={img9} />
            <br />
            <h1 id='contac us' style={{ fontSize: "45px", textAlign: "center", marginTop: "3.3rem", letterSpacing: "3px" }}>
                Contac US
            </h1>
            <hr className='hr1' />
            <div className='cont-1'>
                <img src={img18}/>
                <div className='cont-2'>
                    <div className='cont-3'>
                        <form>
                            <input type='name' placeholder='Name' />
                            
                            <input type='phone' placeholder='Number Phone'/>
                            <br/>
                            <input type='email' placeholder='E-mail'/>
                            
                            <input type='password' placeholder='Password'/>
                           <br/>
                            <textarea rows={9} cols={70} placeholder='Message'/>
                            <br/>
                            <button className='btn-r'>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <div className='click'>
            <a  href="#">⬆</a>
            </div>
             <footer>
                <img src={img1}/>

                <a href="#home">Home</a>
                <a href="#Skill">Skill</a>
                <a href="#Projeckt">Projeckt</a>
                <a href="#servier">Servier</a>
                <a href="#learning">Learning</a>
                <a style={{marginRight:"4rem"}} href="#contac us">Contac US</a> 
                    
                Create Amanj Abbas Akray

             </footer>
        </div>
    );
}

export default Web;