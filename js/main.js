const services = [
'Web Development',
'App Development',
'SEO',
'Digital Marketing',
'Content Writing',
'Graphic Designing',
]



const parent = document.querySelector('section.text-slider');
const list = parent.querySelector('.list');

const clone = list.cloneNode(true);
parent.append(clone)


setInterval(() => {
    scrollTo(0 , scrollY);
}, 500);


// Category
document.querySelectorAll('section.portfolio .categories .category').forEach( span => {
    // Event
    span.addEventListener('click' , () => {     
        const cards = document.querySelectorAll('section.portfolio .card') ;
        console.log(span.dataset.category == 'all' , "ALL")
        if (span.dataset.category.toLowerCase() == 'all') {
            cards.forEach(card => {
                card.classList.remove('hide')
                card.classList.add('move-to-front');
            });
        } else {
            cards.forEach(card => {
            console.log(card.dataset.category.toLowerCase() , span.dataset.category.toLowerCase() , "AS")
            if (card.dataset.category.toLowerCase() == span.dataset.category.toLowerCase()) {
                card.classList.remove('hide');
                card.classList.add('move-to-front');
            } else {
                card.classList.add('hide');
                card.classList.remove('move-to-front');
            }
        });
        }  
    })
});


// Active Class
// document.querySelectorAll('section.why .benifits .benifit').forEach( e => {
//     e.addEventListener('mouseenter', () => {
//         document.querySelectorAll('section.why .benifits .benifit').forEach( e => e.classList.remove('active'));
//         e.classList.add('active');
//     })
// }); 

activeClasses(document.querySelectorAll('section.why .benifits .benifit') , 'mouseenter');
activeClasses(document.querySelectorAll('section.portfolio .categories .category') , 'click');

function activeClasses(elements , event) {
elements.forEach( e => {
    e.addEventListener(event, () => {
        elements.forEach( e => e.classList.remove('active'));
        e.classList.add('active');
    })
});
}


// FAQ
function toggleFAQ() {
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach(faq => {
      const accordionItems = faq.querySelectorAll('.accordion-item');
  
      accordionItems.forEach((accordionItem , index) => {
        const accordionHeader = accordionItem.querySelector('.accordion-header');
        const accordionBody = accordionItem.querySelector('.accordion-body p');
  
        accordionHeader.addEventListener('click', (e) => {
            // Remove All Active Classes
            accordionItems.forEach((item , i) => {
                if (i !== index) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-body p').style.height = '0';
                    item.querySelector('.accordion-header').querySelector('i').className = "fas fa-plus";
                }
            });

            accordionItem.classList.toggle('active');
  
            // Smoothly expand or collapse the answer
            const bodyHeight = accordionBody.scrollHeight;
            if (accordionItem.classList.contains('active')) {
                // Change The Icon From Plus To Minus
                accordionHeader.querySelector('i').className = "fas fa-minus";
                accordionBody.style.height = `${bodyHeight + 20}px`;
            } else {
                accordionHeader.querySelector('i').className = "fas fa-plus";
                accordionBody.style.height = '0';
            }
        });
      });
    });
  }
  
  // Call the function to initialize the FAQ functionality
  toggleFAQ();