const modules = {
    toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],                         // text direction
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ['link', 'image', 'video'],
        ['clean'],
    ],
}

const formats = [
    'size',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'direction',
    'color', 'background', 'align'
]

export { modules, formats }