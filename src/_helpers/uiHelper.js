
export const removeModalBootstrap = () => {
    let modals = document.getElementsByClassName('modal-backdrop');
    for(let i = 0; i < modals.length; i++){
        document.body.removeChild(modals[i]);
    }
}