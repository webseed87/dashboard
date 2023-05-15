const toggleEl = document.querySelector('.iconbar')
const leftWrapEl = document.querySelector('#leftWrap')
const rightWrapEl = document.querySelector('#rightWrap')
toggleEl.addEventListener('click', () => {
if (leftWrapEl.classList.contains('show')) {
		leftWrapEl.classList.remove('show')
		rightWrapEl.classList.remove('show')
		toggleEl.classList.remove('show')
	}
	else {
		leftWrapEl.classList.add('show')
		rightWrapEl.classList.add('show')
		toggleEl.classList.add('show')
	}
})
