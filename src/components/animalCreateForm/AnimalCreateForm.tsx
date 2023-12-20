import styles from './AnimalCreateForm.module.css'

export const AnimalCreateForm = () => {
    return (
        <form className={styles.container}>
            <label className={styles.label}>
                Animal Name
                <input
                    className={styles.input}
                    type="text"
                    maxLength={30}
                />
            </label>

            <label className={styles.label}>
                Animal picture URL
                <input
                    className={styles.input}
                    type="text"
                    maxLength={200}
                />
            </label>

            <div className={styles.buttonWrapper}>
                <button
                    className={styles.button}
                >Create Animal

                </button>
            </div>
        </form>
    );
};

