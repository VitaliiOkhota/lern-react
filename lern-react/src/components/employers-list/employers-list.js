import React from 'react';
import EmployersListItem from '../employers-list-item/employers-list-item'
import './employers-list.css';

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem {...item} />
            //Використовуємо деструктуризацію для скорочення коду (name={item.name} salary={item.salary}).
        )
    })

    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    );
};

export default EmployersList;