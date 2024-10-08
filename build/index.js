import React from 'react'

const concatClassNames = (...args) => args.filter((item) => !!item).join(' ')

const Icon = ({ name, ...props }) => {
    let iconToRender
    switch (name) {
        case 'Address':
            iconToRender = React.createElement('path', {
                d: 'M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z'
            })
            break
        case 'Map':
            iconToRender = React.createElement('path', {
                d: 'm20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z'
            })
            break
        case 'Menu':
            iconToRender = React.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
            break
        case 'Eye':
            iconToRender = React.createElement('path', {
                d: 'M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z'
            })
            break
        case 'Camera':
            iconToRender = React.createElement('path', {
                d: 'm14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z'
            })
            break
        case 'Photo':
            iconToRender = React.createElement('path', {
                d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z'
            })
            break
        case 'Ruler':
            iconToRender = React.createElement('path', {
                d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z'
            })
            break
        case 'Star':
            iconToRender = React.createElement('path', {
                d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
            })
            break
        case 'StarFilled':
            iconToRender = React.createElement('path', {
                d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
            })
            break
        case 'User':
            iconToRender = React.createElement('path', {
                d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z'
            })
            break
        case 'Users':
            iconToRender = React.createElement('path', {
                d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z'
            })
            break
        case 'Point':
            iconToRender = React.createElement('path', {
                d: 'M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'
            })
            break
        case 'Time':
            iconToRender = React.createElement('path', {
                d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z'
            })
            break
        case 'Clip':
            iconToRender = React.createElement('path', {
                d: 'M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z'
            })
            break
        case 'Search':
            iconToRender = React.createElement('path', {
                d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
            })
            break
        case 'Left':
            iconToRender = React.createElement('path', {
                d: 'M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'
            })
            break
        case 'LargeLeft':
            iconToRender = React.createElement('path', {
                d: 'M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12z'
            })
            break
        case 'Right':
            iconToRender = React.createElement('path', { d: 'M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' })
            break
        case 'Down':
            iconToRender = React.createElement('path', { d: 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z' })
            break
        case 'Up':
            iconToRender = React.createElement('path', { d: 'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
            break
        case 'DoubleUp':
            iconToRender = React.createElement(
                React.Fragment,
                null,
                React.createElement('path', { d: 'M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z' }),
                React.createElement('path', { d: 'm6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z' })
            )
            break
        case 'Close':
            iconToRender = React.createElement('path', {
                d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            })
            break
        case 'Tune':
            iconToRender = React.createElement('path', {
                d: 'M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z'
            })
            break
        case 'PlusCircle':
            iconToRender = React.createElement('path', {
                d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8'
            })
            break
        case 'Pencil':
            iconToRender = React.createElement('path', {
                d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06.92.92zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41'
            })
            break
        case 'EditLocation':
            iconToRender = React.createElement('path', {
                d: 'M18.17 4.91 17.1 3.84l-5.55 5.55v1.08h1.08zM16 2.74l1.29-1.29a1.49 1.49 0 0 1 2.12 0l1.15 1.15c.59.59.59 1.54 0 2.12l-.68.68-.02.02-.58.58-6 6H10V8.74zm-2.28-.55-.55.55-1.27 1.27c-3.3.05-5.9 2.6-5.9 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-.1l1.8-1.8c.13.6.2 1.24.2 1.9 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.2.58 0 1.16.06 1.72.18'
            })
            break
        case 'Link':
            iconToRender = React.createElement('path', {
                d: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5'
            })
            break
        case 'Award':
            iconToRender = React.createElement('path', {
                d: 'M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86m-6 .64-2-1.2V4h2zm4-1.2-2 1.2V4h2z'
            })
            break
        case 'FullscreenIn':
            iconToRender = React.createElement('path', {
                d: 'M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z'
            })
            break
        case 'FullscreenOut':
            iconToRender = React.createElement('path', {
                d: 'M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z'
            })
            break
        case 'Layers':
            iconToRender = React.createElement('path', {
                d: 'm11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27zm0-11.47L17.74 9 12 13.47 6.26 9z'
            })
            break
        case 'RadioButtonUnchecked':
            iconToRender = React.createElement('path', {
                d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8'
            })
            break
        case 'RadioButtonChecked':
            iconToRender = React.createElement('path', {
                d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z'
            })
            break
        case 'CheckboxChecked':
            iconToRender = React.createElement('path', {
                d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z'
            })
            break
        case 'CheckboxUnchecked':
            iconToRender = React.createElement('path', {
                d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2'
            })
            break
        case 'CheckboxIndeterminate':
            iconToRender = React.createElement('path', {
                d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z'
            })
            break
        case 'CheckCircle':
            iconToRender = React.createElement('path', {
                d: 'M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8'
            })
            break
        case 'ReportError':
            iconToRender = React.createElement(
                React.Fragment,
                null,
                React.createElement('path', {
                    d: 'M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z'
                }),
                React.createElement('path', { d: 'M11 7h2v6h-2zm0 8h2v2h-2z' })
            )
            break
        case 'Notifications':
            iconToRender = React.createElement('path', {
                d: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z'
            })
            break
        case 'Gps':
            iconToRender = React.createElement('path', {
                d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7'
            })
            break
        case 'Rotate':
            iconToRender = React.createElement('path', {
                d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z'
            })
            break
        case 'External':
            iconToRender = React.createElement('path', {
                d: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z'
            })
            break
        case 'Telegram':
            iconToRender = React.createElement('path', {
                transform: 'translate(-2, 0)',
                d: 'M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z'
            })
            break
        case 'Category':
            iconToRender = React.createElement('path', {
                d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V4h5v7l2.5-1.5L16 11V4h2zm-4.38-6.5L17 18H7l2.38-3.17L11 17z'
            })
            break
        case 'Place':
            iconToRender = React.createElement('path', {
                d: 'M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2'
            })
            break
        case 'Tag':
            iconToRender = React.createElement('path', {
                d: 'm21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M12.83 20 4 11.17V4h7.17L20 12.83z'
            })
            break
        case 'Feed':
            iconToRender = React.createElement('path', {
                d: 'M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zm3 16H5V5h10v4h4zM7 17h10v-2H7zm5-10H7v2h5zm-5 6h10v-2H7z'
            })
            break
        case 'Comment':
            iconToRender = React.createElement('path', {
                d: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM20 4v13.17L18.83 16H4V4zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z'
            })
            break
        case 'HeartEmpty':
            iconToRender = React.createElement('path', {
                d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05'
            })
            break
        case 'HeartFull':
            iconToRender = React.createElement('path', {
                d: 'm12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z'
            })
            break
        case 'PinDrop':
            iconToRender = React.createElement('path', {
                d: 'M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11m-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2M5 20v2h14v-2z'
            })
            break
        case 'Settings':
            iconToRender = React.createElement('path', {
                d: 'M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2'
            })
            break
        case 'Exit':
            iconToRender = React.createElement('path', {
                d: 'M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2'
            })
            break
        case 'VerticalDots':
            iconToRender = React.createElement('path', {
                d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2'
            })
            break
        case 'Light':
            iconToRender = React.createElement('path', {
                d: 'M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z'
            })
            break
        case 'Dark':
            iconToRender = React.createElement('path', {
                d: 'M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C17.53 2.5 15.82 2 14 2'
            })
            break
    }
    return React.createElement('svg', { viewBox: '0 0 24 24', ...props }, iconToRender)
}

const iconNames = {
    Address: 'Address',
    Award: 'Award',
    Camera: 'Camera',
    Category: 'Category',
    CheckCircle: 'CheckCircle',
    CheckboxChecked: 'CheckboxChecked',
    CheckboxIndeterminate: 'CheckboxIndeterminate',
    CheckboxUnchecked: 'CheckboxUnchecked',
    Clip: 'Clip',
    Close: 'Close',
    Comment: 'Comment',
    Dark: 'Dark',
    Down: 'Down',
    DoubleUp: 'DoubleUp',
    EditLocation: 'EditLocation',
    Exit: 'Exit',
    External: 'External',
    Eye: 'Eye',
    Feed: 'Feed',
    FilledStar: 'FilledStar',
    FullscreenIn: 'FullscreenIn',
    FullscreenOut: 'FullscreenOut',
    Gps: 'Gps',
    HeartEmpty: 'HeartEmpty',
    HeartFull: 'HeartFull',
    Layers: 'Layers',
    LargeLeft: 'LargeLeft',
    Left: 'Left',
    Light: 'Light',
    Link: 'Link',
    Map: 'Map',
    Menu: 'Menu',
    Notifications: 'Notifications',
    Pencil: 'Pencil',
    PinDrop: 'PinDrop',
    Place: 'Place',
    PlusCircle: 'PlusCircle',
    Point: 'Point',
    Photo: 'Photo',
    RadioButtonChecked: 'RadioButtonChecked',
    RadioButtonUnchecked: 'RadioButtonUnchecked',
    ReportError: 'ReportError',
    Right: 'Right',
    Rotate: 'Rotate',
    Ruler: 'Ruler',
    Search: 'Search',
    Settings: 'Settings',
    Star: 'Star',
    Tag: 'Tag',
    Telegram: 'Telegram',
    Time: 'Time',
    Tune: 'Tune',
    Up: 'Up',
    User: 'User',
    Users: 'Users',
    VerticalDots: 'VerticalDots'
}

function styleInject(css, ref) {
    if (ref === void 0) ref = {}
    var insertAt = ref.insertAt

    if (!css || typeof document === 'undefined') {
        return
    }

    var head = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    style.type = 'text/css'

    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild)
        } else {
            head.appendChild(style)
        }
    } else {
        head.appendChild(style)
    }

    if (style.styleSheet) {
        style.styleSheet.cssText = css
    } else {
        style.appendChild(document.createTextNode(css))
    }
}

var css_248z$1 =
    '@keyframes styles-module_animation-fadeIn__M94ve {\n  0% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  100% {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n@keyframes styles-module_animation-fadeOut__Sjhiu {\n  0% {\n    visibility: visible;\n    opacity: 1;\n  }\n  100% {\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n@keyframes styles-module_animation-spin__GL5qF {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes styles-module_left-to-right-wave__BRBL1 {\n  0% {\n    -webkit-transform: translateX(-100%);\n    -moz-transform: translateX(-100%);\n    -ms-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  50% {\n    -webkit-transform: translateX(100%);\n    -moz-transform: translateX(100%);\n    -ms-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n    -moz-transform: translateX(100%);\n    -ms-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n}\n.styles-module_spinner__AzIFX {\n  animation: styles-module_animation-spin__GL5qF 1s linear infinite;\n}'
var styles$1 = {
    spinner: 'styles-module_spinner__AzIFX',
    'animation-spin': 'styles-module_animation-spin__GL5qF',
    'animation-fadeIn': 'styles-module_animation-fadeIn__M94ve',
    'animation-fadeOut': 'styles-module_animation-fadeOut__Sjhiu',
    'left-to-right-wave': 'styles-module_left-to-right-wave__BRBL1'
}
styleInject(css_248z$1)

const Spinner = ({ className }) =>
    React.createElement(
        'svg',
        { viewBox: '0 0 100 101', className: concatClassNames(className, styles$1.spinner) },
        React.createElement('path', {
            d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
            fill: 'rgb(229, 231, 235, 1)'
        }),
        React.createElement('path', {
            d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
            fill: '#616161'
        })
    )

var css_248z =
    '.styles-module_buttonLink__uS8Nm {\n  text-decoration: none !important;\n}\n.styles-module_buttonLink__uS8Nm button {\n  margin: 0 auto;\n}\n\n.styles-module_button__vh7mr {\n  cursor: pointer;\n  padding: 6px 10px;\n  border: 0;\n  border-radius: var(--border-radius);\n  min-height: 28px;\n  color: var(--button-default-color);\n  background: var(--button-default-background);\n  font-family: var(--font-family), serif;\n  font-size: var(--font-size);\n  font-weight: 500;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  transition: background-color 0.15s ease-out, color 0.15s ease-out;\n}\n.styles-module_button__vh7mr svg {\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n  fill: var(--button-default-color);\n}\n.styles-module_button__vh7mr img {\n  margin-right: 5px;\n}\n.styles-module_button__vh7mr.styles-module_stretched__S-ixI {\n  width: 100%;\n}\n.styles-module_button__vh7mr.styles-module_noText__gRcNy svg {\n  margin-right: 0;\n}\n.styles-module_button__vh7mr:hover, .styles-module_button__vh7mr:focus {\n  background-color: var(--button-default-background-hover);\n}\n.styles-module_button__vh7mr:active {\n  background-color: var(--button-default-background-active);\n}\n.styles-module_button__vh7mr.styles-module_small__Dad5u {\n  padding: 6px 10px;\n  height: 28px;\n  line-height: 15px;\n}\n.styles-module_button__vh7mr.styles-module_small__Dad5u .styles-module_loader__fN82b {\n  height: 20px;\n  width: 20px;\n  margin-top: 0;\n}\n.styles-module_button__vh7mr.styles-module_medium__DepVh {\n  padding: 8px 10px;\n  height: 34px;\n}\n.styles-module_button__vh7mr.styles-module_medium__DepVh svg {\n  width: 18px;\n  height: 18px;\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF {\n  background-color: var(--button-primary-background);\n  color: var(--button-primary-color);\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF svg {\n  fill: var(--button-primary-color);\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF:hover, .styles-module_button__vh7mr.styles-module_primary__yNXpF:focus {\n  background-color: var(--button-primary-background-hover);\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF:active {\n  background-color: var(--button-primary-background-active);\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF.styles-module_negative__TVXHZ {\n  background-color: var(--button-negative-background);\n  color: var(--button-negative-color);\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF.styles-module_negative__TVXHZ:hover, .styles-module_button__vh7mr.styles-module_primary__yNXpF.styles-module_negative__TVXHZ:focus {\n  background-color: var(--button-negative-background-hover);\n}\n.styles-module_button__vh7mr.styles-module_primary__yNXpF.styles-module_negative__TVXHZ:active {\n  background-color: var(--button-negative-background-active);\n}\n.styles-module_button__vh7mr.styles-module_secondary__LLIKV {\n  background-color: var(--button-secondary-background);\n  color: var(--button-secondary-color);\n}\n.styles-module_button__vh7mr.styles-module_secondary__LLIKV:hover, .styles-module_button__vh7mr.styles-module_secondary__LLIKV:focus {\n  background-color: var(--button-secondary-background-hover);\n  color: var(--button-secondary-color-hover);\n}\n.styles-module_button__vh7mr.styles-module_secondary__LLIKV:active {\n  background-color: var(--button-secondary-background-active);\n  color: var(--button-secondary-color-active);\n}\n.styles-module_button__vh7mr[disabled] {\n  opacity: 0.64;\n  pointer-events: none !important;\n  cursor: not-allowed !important;\n}'
var styles = {
    buttonLink: 'styles-module_buttonLink__uS8Nm',
    button: 'styles-module_button__vh7mr',
    stretched: 'styles-module_stretched__S-ixI',
    noText: 'styles-module_noText__gRcNy',
    small: 'styles-module_small__Dad5u',
    loader: 'styles-module_loader__fN82b',
    medium: 'styles-module_medium__DepVh',
    primary: 'styles-module_primary__yNXpF',
    negative: 'styles-module_negative__TVXHZ',
    secondary: 'styles-module_secondary__LLIKV'
}
styleInject(css_248z)

const Button = ({
    className,
    link,
    noIndex,
    stretched,
    loading,
    size,
    mode = 'primary',
    variant,
    icon,
    children,
    content,
    ...props
}) => {
    const button = React.createElement(
        'button',
        {
            ...props,
            type: props.type ?? 'button',
            className: concatClassNames(
                className,
                styles.button,
                mode && styles[mode],
                variant && styles[variant],
                size && styles[size],
                stretched && styles.stretched,
                !children && styles.noText
            )
        },
        loading
            ? React.createElement(Spinner, { className: styles.loader })
            : icon && React.createElement(Icon, { name: icon }),
        React.createElement('div', null, content ?? children)
    )
    return link
        ? React.createElement(
              'a',
              { className: styles.buttonLink, href: link, title: '', rel: noIndex ? 'noindex nofollow' : '' },
              button
          )
        : button
}

export { Button, Icon, iconNames }
//# sourceMappingURL=index.js.map
