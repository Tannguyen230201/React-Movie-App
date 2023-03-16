import { Fragment } from "react";
import Content from "../Content/Content";
import Intro from "../Intro/Intro";

const Home = () => {
    const style = {
        margin: 'auto',
        maxWidth: '1250px',
        padding:'0 20px',
        minHeigh:'100vh'
    }
    return (
        <Fragment>
            <Intro/>
            <div style={style}>
                <Content movie='movie' link='movie'  id='' name="POPULAR SERIES" typeName="popular"/>
                <Content movie='movie' link='movie'  id='' name="TOP RATED SERIES" typeName="upcoming"/>
                <Content movie='movie' link='movie'  id='' name=" TOP RATED MOVIES" typeName="top_rated"/>
                <Content movie='movie' link='movie'  id='' name="NOW PLAYING" typeName="now_playing" />
            </div>
        </Fragment>

    )
}

export default Home