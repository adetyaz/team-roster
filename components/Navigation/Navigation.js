import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = () => {
	const route = useRouter()
	return (
		<nav className='nav'>
			<img src='/images/svg/logo.svg' alt='logo' className='logo' />
			<ul className='nav-items'>
				<li className='nav-list'>
					<Link href='/' passHref>
						{route.pathname === '/' ? (
							<img
								src='/images/svg/bars-active.svg'
								alt='home'
								className='menu-image'
							/>
						) : (
							<img
								src='/images/svg/bars-muted.svg'
								alt='home'
								className='menu-image'
							/>
						)}
					</Link>
				</li>
				<li className='nav-list'>
					<Link href='/Formation/Formation' passHref>
						{route.pathname === '/Formation/Formation' ? (
							<img
								src='/images/svg/users-active.svg'
								alt='formation'
								className='menu-image'
							/>
						) : (
							<img
								src='/images/svg/users-muted.svg'
								alt='formation'
								className='menu-image'
							/>
						)}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
