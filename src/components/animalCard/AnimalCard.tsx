import styles from './AnimalCard.module.css'

export type AnimalCardProps = {
    animalName: string,
    animalPicutureUrl: string,
}

export const AnimalCard = ({animalName, animalPicutureUrl}: AnimalCardProps) => {
    return (
        <div className={styles.container}>
            <h1> {animalName} </h1>
            <img src={animalPicutureUrl} alt="Picture of the Animal"/>
        </div>
    );
};

