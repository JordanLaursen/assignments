import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Maincontent from "./Maincontent";


const Body = () => {
    return (
        <div>
            <Navbar />
                <img className="picture" src="http://gilstonelectric.com/wp-content/uploads/2015/09/services.png" alt="yankee stadium"/>
            <Maincontent />
            <Footer />
        </div>
    );
}


export default Body;

    // <img className="picture"  src="http://assets.nydailynews.com/polopoly_fs/1.3067553.1492489822!/img/httpImage/image._gen/derivatives/article_1200/white-sox-yankees-baseball-10153-jpg." alt=""/>
