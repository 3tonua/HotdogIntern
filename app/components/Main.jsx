import React from 'react';
import {getData} from "../actions";
import {Link} from 'react-router';
import Header from "./Header.jsx";
import Footer from './Footer.jsx';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getData()
            .then(data => this.setState({data}));
    }

    render() {
        return(
            <div>
                <Header/>

                <div className="hotdog">
                    <img className="hotdog-logo" src="../../img/hotdog.png" alt=""/>
                        <span className="hotdog-text">Dirty Dogs serves all-beef, vegan and vegitarian hot dogs.</span>
                        <div className="btn">
                            <a href="">More Dogs ‘n Make Em Hot</a>
                        </div>
                </div>

                <div className="content-grid">
                    {this.state.data.map((item, index) => (
                        <div key={item.id} className="hot">
                            <div className="content-text" style={{float: index % 2 === 0 ? 'right' : 'left'}}>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                            <img src={item.backgroundURL} alt={item.name}/>
                        </div>
                    ))}
                </div>

                <Footer/>
            </div>
        )
    }
}