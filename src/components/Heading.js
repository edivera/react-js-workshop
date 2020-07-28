import React, { Component } from 'react'

export class Heading extends Component {
    render() {
        return (
            <div className="home">
                <div className="homeLogo">
                    <h3>Scree</h3>
                </div>

                <form>
                    <input type="text" placeholder="search..." value="search" />
                </form>
            </div>
        )
    }
}

export default Heading
