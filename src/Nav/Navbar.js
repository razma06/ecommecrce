import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="nav">
                    <section>
                        <button className="menu-btn"><img src="/images/icon-menu.svg" alt="" /></button>
                        <h1>sneakers</h1>
                        <ul className="categories">
                            <li><a href="">Collections</a></li>
                            <li><a href="">Men</a></li>
                            <li><a href="">Women</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </section>
                    <section>
                        <button><img src="/images/icon-cart.svg" alt="" /></button>
                        <button className="profile">
                            <img src="/images/image-avatar.png" alt="" />
                        </button>
                    </section>
                </div>
            </nav>

            <Test></Test>

        </header>
    )
}

class Test extends React.Component {
    state = {};
    handleClick() {
        this.setState({ a: 1 }, () => this.setState({ b: 1 }))
    }
    render() {
        console.log(this.state);
        return <button onClick={() => this.handleClick()}>dsadsa</button>
    }
}
