import React from 'react'
import TopCarousel from './TopCarousel';
import "./Content.css";
import FloatingContainer from './FloatingContainer';
import Footer from './Footer';
import Header from './Header';

function Content() {
    return (
        <div style={{postion:"relative"}} className="content">
        <Header/>
            <div style={{postion:"relative"}} className="upper__section">
                <TopCarousel className="top__carousel"/>
            </div>
            <div className="middle__content">
                <FloatingContainer 
                    image="https://www.awn.com/sites/default/files/styles/inline_wide/public/image/attached/1053123-jujutsukaisen16x9.jpg"
                    heading="JUJUTSU KAISEN"
                    desc="Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen Jump since March 2018. "
                />
                <FloatingContainer 
                    image="https://storage.googleapis.com/afs-prod/media/9068fa467af76158ab920b26bbeaea25/695.jpeg"
                    heading="DEMON SLAYER"
                    desc="Legend has it that a demon slayer also roams the night, hunting down these ... Anime This is a Wiki about Kimetsu no Yaiba that was created by the fans, for the ..."
                />
                <FloatingContainer 
                    image="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/09/Death-Note-Light-L-and-Ryuk-Cropped.jpg"
                    heading="DEATH NOTE"
                    desc="Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata."
                />
                <FloatingContainer 
                    image="https://cdn.vox-cdn.com/thumbor/jXqE0_L-tKHYVWHJ-OrZk9cubVI=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10601781/48e35398.jpg"
                    heading="MY HERO ACADEMIA"
                    desc="My Hero Academia has been serialized on Weekly Shōnen Jump since July 7, 2014, with 27 volumes having been collected in tankōbon format."
                />
            </div>
            <Footer style={{postion:"relative"}}/>
        </div>
    )
}

export default Content
