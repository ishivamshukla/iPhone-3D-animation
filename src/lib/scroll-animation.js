import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position, {
        x: -3.38,
        y: -10.74,
        Z: -5.93,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top buttom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: 1.52,
        y: 0.77,
        Z: -1.08,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top buttom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top buttom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.sound-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top buttom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
}