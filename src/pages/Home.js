
import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../App";


class Home extends Component {

    render() {


        return (
            <div>
                <Header />
                    <div className="background_home_section">
                        <div className="home_page_css">
                            <h1> Practical work by gHost</h1>
                        </div>
                    </div>

                <Footer />
            </div>
        )
    }
}

export default Home;

