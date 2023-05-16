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


// 모바일 더보기 버튼 추가
const smenumoreEl = document.querySelector('.smenumore')
const sMenuEl = document.querySelector('.sMenu')
smenumoreEl.addEventListener('click', () => {
if (sMenuEl.classList.contains('show')) {
	sMenuEl.classList.remove('show')
}

else{
	sMenuEl.classList.add('show')
}
})