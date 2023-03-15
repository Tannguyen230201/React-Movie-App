import { Fragment } from "react";
import Content from "../Content/Content";
import Intro from "../Intro/Intro";

const Home = () => {
    const style = {
        margin: 'auto',
        maxWidth: '1279px',
    }
    return (
        <Fragment>
            <Intro/>
            <div style={style}>
                <Content link='movie'  id='' name="POPULAR SERIES" typeName="popular"/>
                <Content link='movie'  id='' name="TOP RATED SERIES" typeName="upcoming"/>
                <Content link='movie'  id='' name=" TOP RATED MOVIES" typeName="top_rated"/>
                <Content link='movie'  id='' name="POPULAR MOVIES" typeName="popular" />
            </div>
        </Fragment>

    )
}

export default Home