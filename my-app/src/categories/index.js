import React, { Component } from 'react';
import './index.css';

class Categories extends Component{
    state = {
        newCategorName : ''
    };

    onAddNewClick = () => {
        this.props.addNew(this.state.newCategorName);
    }
    render(){
        const { data } = this.props;
        return(
            <div>
                <h3>Categores</h3>
                <hr></hr>
                <label>Category Name :</label>
                <input type="text" onChange={ evt => this.setState({ newCategorName : evt.target.value})} />                
                <input type="button" value="Add New" onClick={this.onAddNewClick} />
                <ol>
                    { data.map(category => (<li key={category.id}>{category.name} </li>)) }
                </ol>
            </div>
        )
    }
}

export default Categories;
