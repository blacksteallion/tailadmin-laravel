import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// Toolbar options for basic editor
const basicToolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'clean'],
];

// Toolbar options for full editor
const fullToolbar = [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    ['blockquote', 'code-block'],
    ['link'],
    ['clean'],
];

export function initWysiwyg() {
    const editors = document.querySelectorAll('[data-type]');

    editors.forEach((el) => {
        const type = el.dataset.type;
        const placeholder = el.dataset.placeholder || 'Start writing...';

        if (type === 'inline') {
            new Quill(el, {
                theme: 'bubble',
                placeholder,
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'clean'],
                    ],
                },
            });
        } else if (type === 'basic') {
            new Quill(el, {
                theme: 'snow',
                placeholder,
                modules: {
                    toolbar: basicToolbar,
                },
            });
        } else if (type === 'full') {
            new Quill(el, {
                theme: 'snow',
                placeholder,
                modules: {
                    toolbar: fullToolbar,
                },
            });
        }
    });
}
