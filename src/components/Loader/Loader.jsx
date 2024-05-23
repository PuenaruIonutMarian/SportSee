import style from './Loader.module.scss'

/**
 * Composant pour afficher un indicateur de chargement.
 * @module Loader
 * @returns {JSX.Element} Le composant représentant l'indicateur de chargement.
 */
function Loader() {
  return (
    <div className={style.loading}>
      <h1>Chargement en cours</h1>
      <div className={style.loader_wrapper}>
        <div className={style.loader}></div>
      </div>
    </div>
  )
}

export default Loader
