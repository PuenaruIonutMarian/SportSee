import styles from "./ErrorMessage.module.scss";

/**
 * Composant pour afficher un message d'erreur.
 * @module ErrorMessage
 * @returns {JSX.Element} Le composant représentant le message d'erreur.
 */
function ErrorMessage() {
  return <div className={styles.message}>
        <h1>Une erreur s'est produite</h1>
  </div>;
}

export default ErrorMessage;