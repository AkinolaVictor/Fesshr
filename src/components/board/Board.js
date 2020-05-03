import React from "react";
import '../styles/mediaBoard.css';
import ImageReciever from './ImageReciever';
import BookReciever from './BookReciever';
import { ProductConsumer } from "../../Context";

export default class Board extends React.Component {
    constructor (props){
        super(props)
        this.state={
            Email: '',
            Password: ''
        }

    }


    
    a=true
    
    render(){
        return (
        <ProductConsumer>
            {value=>{
                const {logout, savedBooks, savedImages, chooseBoard} =value;
        
        return <div>
            <div className='boardw'>
                <h2 className='heda'>My Board</h2>
                <button data-id='7'className='search-button logout' onClick={logout}>Logout</button> 
                
                {savedImages.length==0 && savedBooks.length==0?
                <h2>You have no saved files in your Board<br /></h2>:
                <div>
                    {savedImages.length==0?
                    <h2>You have no saved Images in your Board</h2>:
                    <div className='boardI'>
                        <div className='search-control'>
                            <button data-id='111' className='search-button boardIm' onClick={chooseBoard}>Images</button>
                            <button data-id='222' className='search-button boardBk' onClick={chooseBoard}>Books</button>
                        </div>
                        <div>
                            <button className='resiz' id='unsplash'>Here are your Saved Images</button>
                            <ImageReciever />
                            <br />
                            <br />
                        </div>
                    </div>
                    }

                    {savedBooks.length==0?
                    <h2>You have no saved Books in your Board<br /><br /></h2>:
                    <div  className='boardB'>
                        <div className='search-control'>
                            <button data-id='111' className='search-button boardIm' onClick={chooseBoard}>Images</button>
                            <button data-id='222' className='search-button boardBk' onClick={chooseBoard}>Books</button>
                        </div>
                        <div>
                            <button className='resiz' id='unsplash'>Here are your Saved Books</button>
                            <BookReciever />
                            <br />
                            <br />
                        </div>
                    </div>
                    }
    
                       
                    
                </div>}
                
            </div>
           
            
        </div>
    
    }}
    </ProductConsumer>
    )
}
}
 
