window.onload = () => {
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        let tl = gsap.timeline({ ease: "power4.inOut" });
	
	tl.to(".from-top .tile", {
		duration: 0.35,
		height: "100%",
		top: "100%",
		delay: 0.2,
		stagger: -0.08,
	});
	tl.set(".from-top .tile", { top: "0", height: "0" });
    }, 870);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            var tl = gsap.timeline()
            
            tl.to(".from-top .tile", {
                duration: 0.35,
                height: "100%",
                top: "0%",
                delay: 0.2,
                stagger: -0.08,
            });

            setInterval(() => {
                window.location.href = target;
            }, 870);
        })
    }
}