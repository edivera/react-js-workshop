import React, { Component } from 'react'

export class Heading extends Component {
    render() {
        return (
            <div>
                <h3>Scree</h3>

                <form>
                    <input type="text" placeholder="search..." value="search" />
                </form>
            </div>
        )
    }
}

export default Heading
