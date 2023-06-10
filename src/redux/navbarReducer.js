let initialState = {
    navItems: [
        {
            id: 1,
            path: '/rezults',
            icon: <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8L2.5 8.07L7.07 3.5C6.89 2.85 7.06 2.11 7.59 1.59C8.37 0.8 9.63 0.8 10.41 1.59C10.94 2.11 11.11 2.85 10.93 3.5L13.5 6.07L14 6C14.18 6 14.35 6 14.5 6.07L18.07 2.5C18 2.35 18 2.18 18 2C18 1.46957 18.2107 0.960859 18.5858 0.585786C18.9609 0.210714 19.4696 0 20 0C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2C22 2.53043 21.7893 3.03914 21.4142 3.41421C21.0391 3.78929 20.5304 4 20 4C19.82 4 19.65 4 19.5 3.93L15.93 7.5C16 7.65 16 7.82 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421C15.0391 9.78929 14.5304 10 14 10C13.4696 10 12.9609 9.78929 12.5858 9.41421C12.2107 9.03914 12 8.53043 12 8L12.07 7.5L9.5 4.93C9.18 5 8.82 5 8.5 4.93L3.93 9.5L4 10C4 10.5304 3.78929 11.0391 3.41421 11.4142C3.03914 11.7893 2.53043 12 2 12C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10C0 9.46957 0.210714 8.96086 0.585786 8.58579C0.960859 8.21071 1.46957 8 2 8Z" fill="white" fill-opacity="0.6" />
            </svg>,
            header: 'Итоги'
        },
        {
            id: 2,
            path: '/orders',
            icon: <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2.00009L16.59 0.590088L10.25 6.93009L11.66 8.34009L18 2.00009ZM22.24 0.590088L11.66 11.1701L7.48003 7.00009L6.07003 8.41009L11.66 14.0001L23.66 2.00009L22.24 0.590088ZM0.410034 8.41009L6.00003 14.0001L7.41003 12.5901L1.83003 7.00009L0.410034 8.41009Z" fill="white" fill-opacity="0.56" />
            </svg>,
            header: 'Заказы'
        },
        {
            id: 3,
            path: '/messages',
            icon: <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z" fill="white" fill-opacity="0.56" />
            </svg>,
            header: 'Сообщения'
        },
        {
            id: 4,
            path: '/calls',
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="rgba(255, 255, 255, 0.6)" />
            </svg>,
            header: 'Звонки'
        },
        {
            id: 5,
            path: '/contreparties',
            icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8.75C4.66 8.75 0 9.92 0 12.25V14H14V12.25C14 9.92 9.34 8.75 7 8.75ZM2.34 12C3.18 11.42 5.21 10.75 7 10.75C8.79 10.75 10.82 11.42 11.66 12H2.34ZM7 7C8.93 7 10.5 5.43 10.5 3.5C10.5 1.57 8.93 0 7 0C5.07 0 3.5 1.57 3.5 3.5C3.5 5.43 5.07 7 7 7ZM7 2C7.83 2 8.5 2.67 8.5 3.5C8.5 4.33 7.83 5 7 5C6.17 5 5.5 4.33 5.5 3.5C5.5 2.67 6.17 2 7 2ZM14.04 8.81C15.2 9.65 16 10.77 16 12.25V14H20V12.25C20 10.23 16.5 9.08 14.04 8.81ZM13 7C14.93 7 16.5 5.43 16.5 3.5C16.5 1.57 14.93 0 13 0C12.46 0 11.96 0.13 11.5 0.35C12.13 1.24 12.5 2.33 12.5 3.5C12.5 4.67 12.13 5.76 11.5 6.65C11.96 6.87 12.46 7 13 7Z" fill="white" fill-opacity="0.56" />
            </svg>,
            header: 'Контрагенты'
        },
        {
            id: 6,
            path: '/documents',
            icon: <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14H12V16H4V14ZM4 10H12V12H4V10ZM10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18Z" fill="white" fill-opacity="0.56" />
            </svg>,
            header: 'Документы'
        },
        {
            id: 7,
            path: '/performers',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 11C10.7 11 13.8 12.29 14 13V14H2V13.01C2.2 12.29 5.3 11 8 11ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z" fill="white" fill-opacity="0.6" />
            </svg>,
            header: 'Исполнители'
        },
        {
            id: 8,
            path: '/readings',
            icon: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4C18.58 4 19.05 4.2 19.42 4.59C19.8 5 20 5.45 20 6V17C20 17.55 19.8 18 19.42 18.41C19.05 18.8 18.58 19 18 19H2C1.42 19 0.95 18.8 0.58 18.41C0.2 18 0 17.55 0 17V6C0 5.45 0.2 5 0.58 4.59C0.95 4.2 1.42 4 2 4H6V2C6 1.42 6.2 0.95 6.58 0.58C6.95 0.2 7.42 0 8 0H12C12.58 0 13.05 0.2 13.42 0.58C13.8 0.95 14 1.42 14 2V4H18ZM2 6V17H18V6H2ZM12 4V2H8V4H12Z" fill="white" fill-opacity="0.6" />
            </svg>,
            header: 'Отчёты'
        },
        {
            id: 9,
            path: '/base',
            icon: <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8C11.21 8 13 6.21 13 4C13 1.79 11.21 0 9 0C6.79 0 5 1.79 5 4C5 6.21 6.79 8 9 8ZM9 2C10.1 2 11 2.9 11 4C11 5.1 10.1 6 9 6C7.9 6 7 5.1 7 4C7 2.9 7.9 2 9 2ZM9 10.55C6.64 8.35 3.48 7 0 7V18C3.48 18 6.64 19.35 9 21.55C11.36 19.36 14.52 18 18 18V7C14.52 7 11.36 8.35 9 10.55ZM16 16.13C13.47 16.47 11.07 17.43 9 18.95C6.94 17.43 4.53 16.46 2 16.12V9.17C4.1 9.55 6.05 10.52 7.64 12L9 13.28L10.36 12.01C11.95 10.53 13.9 9.56 16 9.18V16.13V16.13Z" fill="white" fill-opacity="0.6" />
            </svg>,
            header: 'База знаний'
        },
        {
            id: 10,
            path: '/settings',
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4289 10.98C17.4689 10.66 17.4989 10.34 17.4989 10C17.4989 9.66 17.4689 9.34 17.4289 9.02L19.5389 7.37C19.7289 7.22 19.7789 6.95 19.6589 6.73L17.6589 3.27C17.5689 3.11 17.3989 3.02 17.2189 3.02C17.1589 3.02 17.0989 3.03 17.0489 3.05L14.5589 4.05C14.0389 3.65 13.4789 3.32 12.8689 3.07L12.4889 0.42C12.4589 0.18 12.2489 0 11.9989 0H7.99886C7.74886 0 7.53886 0.18 7.50886 0.42L7.12886 3.07C6.51886 3.32 5.95886 3.66 5.43886 4.05L2.94886 3.05C2.88886 3.03 2.82886 3.02 2.76886 3.02C2.59886 3.02 2.42886 3.11 2.33886 3.27L0.338863 6.73C0.208863 6.95 0.268863 7.22 0.458863 7.37L2.56886 9.02C2.52886 9.34 2.49886 9.67 2.49886 10C2.49886 10.33 2.52886 10.66 2.56886 10.98L0.458863 12.63C0.268863 12.78 0.218863 13.05 0.338863 13.27L2.33886 16.73C2.42886 16.89 2.59886 16.98 2.77886 16.98C2.83886 16.98 2.89886 16.97 2.94886 16.95L5.43886 15.95C5.95886 16.35 6.51886 16.68 7.12886 16.93L7.50886 19.58C7.53886 19.82 7.74886 20 7.99886 20H11.9989C12.2489 20 12.4589 19.82 12.4889 19.58L12.8689 16.93C13.4789 16.68 14.0389 16.34 14.5589 15.95L17.0489 16.95C17.1089 16.97 17.1689 16.98 17.2289 16.98C17.3989 16.98 17.5689 16.89 17.6589 16.73L19.6589 13.27C19.7789 13.05 19.7289 12.78 19.5389 12.63L17.4289 10.98ZM15.4489 9.27C15.4889 9.58 15.4989 9.79 15.4989 10C15.4989 10.21 15.4789 10.43 15.4489 10.73L15.3089 11.86L16.1989 12.56L17.2789 13.4L16.5789 14.61L15.3089 14.1L14.2689 13.68L13.3689 14.36C12.9389 14.68 12.5289 14.92 12.1189 15.09L11.0589 15.52L10.8989 16.65L10.6989 18H9.29886L9.10886 16.65L8.94886 15.52L7.88886 15.09C7.45886 14.91 7.05886 14.68 6.65886 14.38L5.74886 13.68L4.68886 14.11L3.41886 14.62L2.71886 13.41L3.79886 12.57L4.68886 11.87L4.54886 10.74C4.51886 10.43 4.49886 10.2 4.49886 10C4.49886 9.8 4.51886 9.57 4.54886 9.27L4.68886 8.14L3.79886 7.44L2.71886 6.6L3.41886 5.39L4.68886 5.9L5.72886 6.32L6.62886 5.64C7.05886 5.32 7.46886 5.08 7.87886 4.91L8.93886 4.48L9.09886 3.35L9.29886 2H10.6889L10.8789 3.35L11.0389 4.48L12.0989 4.91C12.5289 5.09 12.9289 5.32 13.3289 5.62L14.2389 6.32L15.2989 5.89L16.5689 5.38L17.2689 6.59L16.1989 7.44L15.3089 8.14L15.4489 9.27ZM9.99886 6C7.78886 6 5.99886 7.79 5.99886 10C5.99886 12.21 7.78886 14 9.99886 14C12.2089 14 13.9989 12.21 13.9989 10C13.9989 7.79 12.2089 6 9.99886 6ZM9.99886 12C8.89886 12 7.99886 11.1 7.99886 10C7.99886 8.9 8.89886 8 9.99886 8C11.0989 8 11.9989 8.9 11.9989 10C11.9989 11.1 11.0989 12 9.99886 12Z" fill="white" fill-opacity="0.56" />
            </svg>,
            header: 'Настройки'
        }
    ]
}


const navbarReducer = (state = initialState, action) => {
    return state;
};


export default navbarReducer;