import styles from './CardGrid.module.css';

const CardGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <ul className={styles.list}>{children}</ul>;
};

export default CardGrid;
