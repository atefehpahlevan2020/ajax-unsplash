import React from 'react';
import ImageCard from './ImageCard';
import './ImagesList.css';


const ImagesList = (props) => {
    return(
        <div>
            <div className='result-count-container'>Result: <span>{props.data.total ? props.data.total : 0}</span></div>
            {(props.data.total && props.data.results) && (
                <div className='image-list'>
                    {props.data.results.map((image) => {
                        return (
                            <ImageCard key={image.id} image={image}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
export default ImagesList;