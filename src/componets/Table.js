import React, { Component } from 'react'
import './style/Table.css'
import axios from 'axios'
import img2 from '../img/pick2.jpg'

 class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                this.setState({data: response.data, loader: false})
            })
        }, 2500)
    }
    render() {
        return (
            <div className="Tabela">
                <table> 
                <h2>Blog</h2>
                    <tbody>
                        {this.state.loader ? <div>"Landing..."</div>:
                        <>{this.state.data.map((item) => {
                        return <tr key={item.id}><img src={img2}/> <h4>{item.title}</h4><p>{item.body}</p> <button type="button" class="btn btn-outline-secondary" >Read this</button></tr>})}</>}
                    </tbody> 
                </table>
            </div>
        )
    }
}

export default Table
