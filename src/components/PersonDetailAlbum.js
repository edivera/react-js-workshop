import React, { Component } from 'react'

export class PersonDetailAlbum extends Component {
    render() {
        return (
            <div className="detailAlbumsListContainer">
                {
                    this.props.albums.map(photo => {
                        return (
                            <div className="detailSinglePicContainer" key={photo.cover }>
                                <img src={`Albums/${this.props.name}/${photo.cover}.jpeg`} alt="ss" className="detailAlbumPic"/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PersonDetailAlbum
