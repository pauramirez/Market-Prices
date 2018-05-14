import React  from "react";
import ReactDom from "react-dom";
import {mount} from "react-mounter";
import {MainLayout} from "./layouts/MainLayout";
import ComentariosWrapper from "./comentarios/ComentariosWrapper"
import StockWrapper from './stock/StockWrapper';
import About from './About'


FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<ComentariosWrapper/>)
        })
    }
});

FlowRouter.route('/Grafica', {
    action() {
        mount(MainLayout, {
            content: (<StockWrapper/>)
        })
    }
});

FlowRouter.route('/About', {
    action() {
        mount(MainLayout, {
            content: (<About/>)
        })
    }
});