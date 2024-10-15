// Ajoutez ceci dans un fichier JavaScript séparé ou dans une balise <script> à la fin de votre fichier HTML

// Remplacez ces valeurs par vos informations
const apiUrl = 'https://gateway.singpay.ga/v1/ext'; // URL de l'API
const clientId = '69f86a61-2633-4b09-9b47-c9915f0844cf'; // Votre client_id
const clientSecret = 'de06c4cfed56a8ba0c97f724c209dcb48452b933eb84dcdb14237d993c53ec68'; // Votre client_secret
const walletId = '65533468243d7bfaf25c86af'; // ID de votre portefeuille

// Corps de la requête
const paymentInfo = {
  portefeuille: "HARMONIE HOME",  // Remplacez par votre numéro de portefeuille
  reference: "HARMONIE-HOME",  // Référence du produit
  redirect_success: "http://127.0.0.1:5500/template/order-success.html",  // URL de redirection en cas de succès
  redirect_error: "https://votre-site.com/error",  // URL de redirection en cas d'erreur
  amount: 3000,  // Montant à payer (en CFA)
  disbursement: "",  // Remplacez par votre chaîne de distribution
  logoURL: "https://harmonie-home.netlify.app/assets/img/logo/logo.jpg",  // URL du logo (facultatif)
  isTransfer: false  // Indique si c'est un transfert ou non
};

// Fonction pour effectuer la requête
async function createPayment() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': clientId,
        'x-client-secret': clientSecret,
        'x-wallet': walletId
      },
      body: JSON.stringify(paymentInfo)
    });

    if (!response.ok) {
      throw new Error(`Erreur: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Lien de paiement:', data.link);
    console.log('Expiration:', data.exp);
    
    // Redirection vers le lien de paiement
    window.location.href = data.link;
  } catch (error) {
    console.error('Erreur lors de la création du paiement:', error);
  }
}

// Ajout d'un écouteur d'événements pour le bouton "Acheter maintenant"
document.getElementById('buy-button').addEventListener('click', function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  createPayment(); // Appelle la fonction de paiement
});
