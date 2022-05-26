import React from 'react';


class ImageCard extends React.Component {

    constructor(props){
        super(props);

        this.imageElement = React.createRef();
    }

    state = {
        collSpans : 0,
    }

    componentDidMount() {
        this.imageElement.current.addEventListener('load', this.setSpan);
    }

    setSpan = (event) => {
        let height = event.target.clientHeight;
        this.setState({
            collSpans : Math.ceil(height / 10)
        })
    }
    render() {
        return (
            <div style={{gridRowEnd : `span ${this.state.collSpans}`}} className='image-card' key={this.props.image.id}>
                <img ref={this.imageElement} src={this.props.image.urls.full} alt={this.props.image.alt_description}/>
            </div>
        )
    }
}
export default ImageCard;