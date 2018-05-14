import React from "react";
import ReactDom from "react-dom";
import AccountsUI from '../AccountsUI';

export const MainLayout = ({ content }) => (
    <div className="main-layout">
        <header>
            <h2> Stock Twitter</h2>
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
            MADE BY PAULA RAMIREZ
        </footer>
    </div>
)