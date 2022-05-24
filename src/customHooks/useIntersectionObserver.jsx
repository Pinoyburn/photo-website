// creates a new IntersectionObserver

import { useEffect } from 'react';

// USAGE: arguments -> ( string of class name prefixed with a period for querySelector of class, ...
// ...string of class w/ css transformations, options for IO)
export default function useIntersectionObserver( nodeRef, className, customOptions ) {

    const customObserver = new IntersectionObserver(function(entries, customObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add(className);
                customObserver.unobserve(entry.target);
            }
        })
    }, customOptions);

    useEffect(() => {
        const DOMRef = document.querySelectorAll(nodeRef);
        DOMRef.forEach(fader => {
            customObserver.observe(fader);
        })

        return () => {
            customObserver.disconnect();
        }
    })
}