const   spans = document. querySelectorAll('h1 span')
spans.forEach(span => span. addEventListner('mouseover', function(e) {
    span.classList.add('animated', 'rubberband')
}))
spans.forEach(span => span. addEventListner('mouseover', function(e) {
    span.classList.add('animated', 'rubberband')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('bar-css')
const jsBar = document.querySelector('.bar-javascript')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: 'calc(0% - 6px'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
    t1.fromTo(cssBar, .75, {width: 'calc(0% - 6px'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
    t1.fromTo(jsBar, .75, {width: 'calc(0% - 6px'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggeredElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addto(controller)


const showRequiredCategory = event => {
    const getid = event.id 
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++) {
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }
    event.classlist.add('active')
    const getCategory = document.querySelector('.category-${getId}')
    const category = document. querySelectorAll('div[class ^= "category-"]')
    for(i=0; i<categories.lenght; i++) {
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}