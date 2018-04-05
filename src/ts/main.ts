/// <reference path="../../node_modules/@types/node/index.d.ts" />

const style = require("../scss/app.scss");

const $ = function (selector) {
    let $elems: Element[];

    if (typeof selector === "string") {
        $elems = Array.prototype.slice.call(document.querySelectorAll(selector));
    } else if (selector instanceof Element) {
        $elems = [selector];
    } else {
        $elems = selector;
    }

    return {
        get: (index: number): Element => {
            return $elems[index];
        },

        on: (event, callback) => {
            $elems.forEach(($elem) => {
                $elem.addEventListener(event, callback);
            });
        },

        find: (selector): Element => {
            let $foundElems: Element[] = [];

            $elems.map($elem => {
                $foundElems.push($elem.querySelector(selector));
            });

            return $foundElems[0];
        },

        scrollTo: () => {
            const target = (<HTMLElement>$elems[0]).offsetTop - 50;

            window.scrollTo({
                behavior: "smooth",
                left: 0,
                top: target,
            });
        }
    };
};

/*****************************************************************************/

const $headerNavLinks = $("header nav a");

$headerNavLinks.on("click", (ev) => {
    ev.preventDefault();

    const target = ev.currentTarget.getAttribute("href");
    const $target = $(target);

    $(target).scrollTo();
});

const $radioButtons = $("form .radio-button");

$radioButtons.on("keypress", (ev) => {
    if (ev.keyCode === 13) {
        const $input = ev.currentTarget.querySelector("input");

        $input.dispatchEvent(new MouseEvent("click"));
    }
});
