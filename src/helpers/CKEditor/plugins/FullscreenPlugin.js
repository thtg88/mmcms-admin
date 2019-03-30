import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class FullscreenPlugin extends Plugin {
    static get pluginName() {
        return 'fullscreen';
    }

    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('fullscreen', locale => {
            const view = new ButtonView(locale);
            let isFullscreen = false;

            view.set({
                label: 'Fullscreen',
                // class: 'fa fa-fw fa-arrows-alt',
                icon: '<i className="fa fa-fw fa-arrows-alt" />',
                // icon: `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>`,
                tooltip: true,
            });

            view.on('execute', () => {
                console.log('full screen!');
                // let ckEditor = editor.ui.view.element;
                // if (isFullscreen) {
                //     ckEditor.classList.remove('fullscreen');
                //     isFullscreen = false;
                //     ckEditor.getElementsByClassName('ck-sticky-panel__content')[0].style.width = ckEditor.offsetWidth + 'px';
                // }
                // else {
                //     ckEditor.classList.add('fullscreen');
                //     isFullscreen = true;
                //     ckEditor.getElementsByClassName('ck-sticky-panel__content')[0].style.width = ckEditor.offsetWidth + 'px';
                // }
            });

            return view;
        });
    }
}

export default FullscreenPlugin;