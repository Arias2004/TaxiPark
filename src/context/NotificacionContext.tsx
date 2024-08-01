'use client'

import { Notification } from '@/components/Notification';
import { createContext, useState, useContext } from 'react'

export type NotificacionStatu = 'error' | 'success' | null

interface IState {
    open: boolean;
    status: NotificacionStatu;
    msj: string | null;
}

interface INotificacion extends IState {
    showNotification: (props: IState) => void;
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

const defaultState: IState = {
    open: false,
    status: null,
    msj: null,
}

export const NotificacionContext = createContext<INotificacion>(
    {} as INotificacion
)

export const useNotificacion = () => {
    const context = useContext(NotificacionContext);
    if (!context) {
        throw new Error("useNotificacion must be used within a NotificacionProvider");
    }
    return context;
};

export const NotificacionProvider: React.FC<Props> = ({ children }) => {
    const [notification, setNotification] = useState<IState>(defaultState)

    const showNotification = (props: IState) => {
        if (props) {
            setNotification(props)

            setTimeout(() => {
                setNotification(defaultState)
            }, 3000)
        }
    }

    return (
        <NotificacionContext.Provider value={{ ...notification, showNotification }}>
            {children}
            {
                notification.open && (
                    <Notification status={notification.status} msj={notification.msj} />
                )
            }
        </NotificacionContext.Provider>
    )
}

export default NotificacionContext
