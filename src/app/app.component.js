import './app.component.scss';

export const appSkeleton = `
	<header>
		<i class="fas fa-circle"></i>
		<i class="fas fa-circle"></i>
		<i class="fas fa-circle"></i>
		<span>fyodor-loenko - front-end developer</span>
	</header>
	
	<aside>
		<ul>
			<li>
				<i class="far fa-folder"></i><span>fyodor-loenko</span>
				<ul>
					<li>
						<i class="fas fa-folder"></i><span>src</span>
						<ul>
							<li><i class="fab fa-html5"></i><span>about</span></li>
							<li><i class="fab fa-css3"></i><span>code</span></li>
							<li><i class="fab fa-js"></i><span>connect</span></li>
						</ul>
					</li>
					<li>
						<i class="fas fa-folder"></i><span>assets</span>
						<ul>
							<li><i class="fab fa-twitter"></i><span>twitter</span></li>
							<li><i class="fab fa-github"></i><span>github</span></li>
							<li><i class="fab fa-codepen"></i><span>codepen</span></li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</aside>
	
	<nav>
		<ul>
			<li><i class="fab fa-html5"></i><span>about</span></li>
			<li><i class="fab fa-css3"></i><span>code</span></li>
			<li><i class="fab fa-js"></i><span>connect</span></li>
		</ul>
	</nav>
	
	<section>
		Content is here
	</section>
	
	<footer>status bar</footer>
`;