import { useState } from 'react';

export const useInputDialog = () => {
    const [inputValue, setInputValue] = useState('');

    const showInputDialog = (message) => {
        // Вызываем диалоговое окно с инпутом
        let userInput = prompt(message);

        // Проверяем, что пользователь не нажал "Отмена"
        if (userInput !== null) {
            // Записываем введенную информацию в состояние
            setInputValue(userInput);
        
        } 
    };

    return [inputValue, showInputDialog];
};

// Использование
// const [inputValue, showInputDialog] = useInputDialog();

// const handleClick = () => {
//     showInputDialog('Введите что-нибудь:');
// };