import s from './LinkButton.module.scss'

export interface LinkButtonProps {
    route: 'toPost' | 'back'
}

export const LinkButton: React.FC<LinkButtonProps> = ({route}) => {
    return (
        <div className={s.linkButton__wrapper}>
            <button className={route === 'toPost' ? s.linkButton : s.linkButton__back}>
                {route === 'toPost' ? 'Подробнее' : 'Назад'}
            </button>
        </div>

    )
}
