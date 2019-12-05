function navToMenu(){
	console.log("triggered")
}

gsap.to("#logo",{duration: 1, y: 50, opacity:1, onComplete:navToMenu});
