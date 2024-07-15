// Sélectionner les éléments du DOM
const commentForm = document.querySelector('form');
const commentList = document.querySelector('#comment-list');
const errorMessage = document.querySelector('#error-message');

// Écouter l'événement de soumission du formulaire
commentForm.addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const message = document.querySelector('#message').value;

    // Vérifier si tous les champs sont remplis
    if (firstName && lastName && message) {
        // Masquer le message d'erreur
        errorMessage.style.display = 'none';

        // Créer un nouvel élément de commentaire
        const commentElement = createCommentElement(firstName, lastName, message);

        // Ajouter le nouvel élément de commentaire à la liste des commentaires
        commentList.appendChild(commentElement);

        // Réinitialiser le formulaire
        commentForm.reset();
    } else {
        // Afficher le message d'erreur
        errorMessage.style.display = 'block';
    }
});

// Fonction pour créer un nouvel élément de commentaire
function createCommentElement(firstName, lastName, message) {
    // Créer un nouvel élément div pour le commentaire
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200', 'py-10');

    // Créer un nouvel élément div pour le contenu du commentaire
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('flex-1');

    // Créer un nouvel élément h3 pour le nom de l'auteur
    const authorName = document.createElement('h3');
    authorName.classList.add('font-medium', 'text-gray-900');
    authorName.textContent = `${firstName} ${lastName}`;

    // Créer un nouvel élément div pour le contenu du commentaire
    const commentContent = document.createElement('div');
    commentContent.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');

    // Créer un nouvel élément p pour le contenu du commentaire
    const commentText = document.createElement('p');
    commentText.textContent = message;

    // Ajouter le contenu du commentaire à l'élément div du contenu du commentaire
    commentContent.appendChild(commentText);

    // Ajouter le nom de l'auteur et le contenu du commentaire à l'élément div du commentaire
    contentDiv.appendChild(authorName);
    contentDiv.appendChild(commentContent);

    // Ajouter l'élément div du commentaire à l'élément div du commentaire parent
    commentDiv.appendChild(contentDiv);

    // Retourner l'élément div du commentaire
    return commentDiv;
}
