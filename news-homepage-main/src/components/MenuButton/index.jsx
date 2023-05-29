import styles from './MenuButton.module.css';

function MenuButton(props) {
  return <div className={styles.text}>{props.text}</div>;
}

export default MenuButton;
