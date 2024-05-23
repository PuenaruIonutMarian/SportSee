import style from './NoData.module.scss'

/**
 * Composant NoData affiché lorsqu'aucune donnée n'est disponible.
 * @returns {JSX.Element} Composant NoData.
 */
const NoData = () => {
  return (
    <div className={style.noData}>
      <p>Aucune donnée disponible</p>
    </div>
  )
}

export default NoData
