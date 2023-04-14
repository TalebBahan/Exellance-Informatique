
import './message.css'
export default function Message() {
    function handleClick() {
        const parent = document.querySelector('.alert');
        parent.style.display = 'none';
    }

    return (
        <div className="alert">
            <span className="closebtn" onClick={handleClick}>&times;</span>
            Votre demande a été envoyée avec succès.
        </div>
    );
}