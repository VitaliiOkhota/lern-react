import React from 'react';
import EmployersListItem from '../employers-list-item/employers-list-item'
import './employers-list.css';

const EmployersList = ({data}) => {

    const elements = data.map(item => { //Використовуємо метод масиву map.
        const {id, ...itemProps} = item; //Використовуємо деструктуризацію для скорочення коду (name={item.name} salary={item.salary}).
        return (
            <EmployersListItem key={id} {...itemProps} /> //Призначаємо key для запобігання помилки.
        );
    });

    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    );
};

export default EmployersList;