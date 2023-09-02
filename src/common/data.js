import React from 'react';


export const formatDateTime = (dateTimeStr) => {
    const dateTime = new Date(dateTimeStr);

    const formattedTime = `${dateTime.getHours()}:${dateTime.getMinutes()}`;

    const options = {month: 'short', day: 'numeric' };
    const formattedDate = dateTime.toLocaleDateString('ru-RU', options);

    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const dayOfWeek = daysOfWeek[dateTime.getDay()];

    return (
        <div>
            <span style={{ fontSize: '18px', color: 'black', marginRight:'10px' }}>{formattedTime}</span>
            <span style={{ fontSize: '14px', color: 'blue' }}>
                {`${formattedDate}  ${dayOfWeek}`}
            </span>
        </div>
    );
};