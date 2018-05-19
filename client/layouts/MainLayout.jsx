import React from "react";
import ReactDom from "react-dom";
import AccountsUI from '../AccountsUI';

export const MainLayout = ({ content }) => (
    <div className="main-layout">
        <header>
            <h2>Market Price</h2>
            <nav>
                <a href="/"> Comentarios </a>
                <a href="/Grafica"> Grafica </a>
                <a href="/Twitter"> Twitter </a>
                <AccountsUI/>
            </nav>
        </header>

        <main>
            {content}
        </main>

        <footer>
        <br/><br/>
        <hr/>
            <p>Made by <a href="https://pauramirez.github.io/Paula-Ramirez/">Paula Ramirez</a> with ❤️🖥</p>
        </footer>
    </div>
)