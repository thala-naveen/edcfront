import './index.scss'
import Counter from './counter'
import Carousel from './carousel'

export default function Startups(){

    return (
        <div id="ourStartups" style={{height:'fit-content'}}>
        <Carousel/>
        <Counter/>
        </div>
    )
};
