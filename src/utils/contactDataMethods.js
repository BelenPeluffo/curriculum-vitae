export const getClickHandler = (contactType, data) => {
    switch (contactType) {
        case 'whatsapp':
            return openWhatsappChat(data);
        case 'email':
            return openEmailManager(data);
    }
}

const openWhatsappChat = (cellphoneNumber) => () => {
    try {
        const chatUrl = `https://web.whatsapp.com/send?phone=${cellphoneNumber.replace(' ', '')}`;
        window.open(chatUrl, '_blank');
    } catch {
        console.log('Hubo un error para abrir whatsapp');
    }
}

const openEmailManager = (emailAdress) => () => {
    try {
        const mailLink = `mailto:${emailAdress}`;
        window.open(mailLink, '_blank');
    } catch {
        console.log('Hubo un error para abrir el editor de correo electrónico.')
    }
}