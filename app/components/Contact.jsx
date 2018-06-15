import React, {Component} from 'react';
import {Link} from 'react-router';
import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import {postData} from "../actions";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                email: '',
                comment: '',
            }
        }
    }

    handleInputChange = (name) => e => {
        this.setState({
            data: Object.assign({}, this.state.data, {[name]: e.target.value})
        })
    };

    handleSubmit = () => {
        postData(this.state.data);
        this.setState({
            data: {
                name: '',
                email: '',
                comment: '',
            }
    };

    render() {
        return (
            <div>
                <Header/>

                <div className="contact">
                    <p>Contact us</p>

                    <input type="text" value={this.state.data.name} onChange={this.handleInputChange('name')}
                           placeholder='Name'/>
                    <input type="email" value={this.state.data.email} onChange={this.handleInputChange('email')}
                           placeholder='Email'/>

                    <textarea value={this.state.data.comment} onChange={this.handleInputChange('comment')}
                              placeholder='Comment'>
                        </textarea>
                    <p>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </p>
                </div>

                <Footer/>
            </div>
        )
    }
}
