export type NotificacionStatu = 'error' | 'success' | null

interface Props {
    status: NotificacionStatu;
    msj: string | null;
}

export const Notification = ({ status, msj }: Props) => {

    let color = ''

        if (status === 'success') {
            color = 'bg-green-300 text-green-700'
        } 
        if (status === 'error') {
            color = 'text-red-300 bg-red-700'
        }

    return (
        <div className={`flex absolute right-[-13%] top-[92.5%] translate-y-[-50%] translate-x-[-50%] z-50 w-[400px] py-3 items-center ${color} justify-center`}>
            <p>{msj}</p>
        </div>
    )
}
