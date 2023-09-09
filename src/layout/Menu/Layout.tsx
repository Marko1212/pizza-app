import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles.sidebar}>
				<div className={styles['user']}>
					<img
						className={styles.avatar}
						src='/avatar.png'
						alt='Avatar utilisateur'
					/>
					<div className={styles.name}>Victor Hugo</div>
					<div className={styles.email}>victor@hugo.fr</div>
				</div>
				<div className={styles['menu']}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						<img src='/menu-icon.svg' alt='Icône du menu' />
						Menu
					</NavLink>
					<NavLink
						to='/cart'
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						<img src='/cart-icon.svg' alt='Icône de la corbeille' />
						Cart
					</NavLink>
				</div>
				<Button className={styles.exit}>
					<img src='/exit-icon.svg' alt='Icône de la sortie' />
					Sortie
				</Button>
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
}

/* Version avec le hook useLocation
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import { useEffect } from 'react';
import cn from 'classnames';

export function Layout() {
	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);

	return (
		<div className={styles['layout']}>
			<div className={styles.sidebar}>
				<div className={styles.user}>
					<img className={styles.avatar} src='/avatar.png' alt='avatar' />
					<div className={styles.name}>Victor Hugo</div>
					<div className={styles.email}>victor@hugo.fr</div>
				</div>
				<div className={styles.menu}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							cn(styles.link, {
								[styles.active]: isActive
							})
						}
					>
						<img src='/menu-icon.svg' alt='icône du menu' />
						Menu
					</NavLink>
					<NavLink
						to='/cart'
						className={cn(styles.link, {
							[styles.active]: location.pathname === '/cart'
						})}
					>
						<img src='/cart-icon.svg' alt='icône de la corbeille' />
						Cart
					</NavLink>
				</div>
				<Button className={styles.exit}>
					<img src='/exit-icon.svg' alt='Icône de la sortie' />
					Sortie
				</Button>
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
} */
