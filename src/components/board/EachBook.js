import React from "react";

export default class EachBook extends React.Component {
    render(){
        return <div className='handleAll'>
            <button className='eachcontent nohover eachbooK box1'>
                <img src={this.props.image} className='border-book' width='97%' height='70%' />
                <div className='BookDetail'>
                    <p>Title: {this.props.title} <span className='button bookboard' id={`s${this.props.id}`} onClick={this.props.remove}> Remove </span></p>
                    <p>Author: {this.props.author}</p>
                    <p>Published Year: {this.props.year}</p>
                </div>
            </button>
            <div className='optionB hide box2'>
                <p className='av'><i className="fas fa-download"></i></p>
                <p className='av'><i className="fas fa-cart-plus"></i></p>
                <p className='av'><i className="far fa-eye"></i></p>
                <p className='av'><i className='fas fa-columns' ></i></p>
            </div>
        </div>
    }
}

