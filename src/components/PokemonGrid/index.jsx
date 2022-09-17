import styles from './PokemonGrid.module.css'

export const PokemonGrid = ({ data }) => {

  const typeColors = {
    bug: 'C3CE75',
    dark: '333',
    dragon: 'F9BE00',
    electric: 'FFD86F',
    fairy: 'F469A9',
    fighting: 'D6B591',
    fire: 'FB6C6C',
    flying: 'D6B591',
    ghost: '735797',
    grass: '48D0B0',
    ground: 'B1736C',
    ice: '7FCCEC',
    normal: 'C2C2A1',
    poison: '7C538C',
    psychic: '9B7FA6',
    rock: 'A6AAB6',
    steel: 'CCCCDE',
    water: '609FB5'
  };

  const upperCaseFirstLetter = string => {
    return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
  }
  
  return (
    <div 
    className={styles.grid} 
    style={{
      backgroundColor: `#${typeColors[data.data.types[0].type.name]}`, 
      boxShadow: `0 0 10px #${typeColors[data.data.types[0].type.name]}`
    }}>
      <div className={styles.contentGrid}>
        <div className={styles.leftSide}>
          <h3 className={styles.leftSideTitle}>{upperCaseFirstLetter(data.data.name)}</h3>
          <div className={styles.leftSideElements}>
            <span>#{data.data.id}</span>
            <span>{upperCaseFirstLetter(data.data.types[0].type.name)}</span>
            {data.data.types[1] &&
              <span>{upperCaseFirstLetter(data.data.types[1].type.name)}</span>
            }
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSideImage}>
            <img src={data.data.sprites.other['dream_world'].front_default} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}