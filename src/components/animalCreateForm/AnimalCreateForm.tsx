import styles from './AnimalCreateForm.module.css'
import {useRef, useState} from "react";
import {z} from "zod";

type AnimalCreateFormProps = {
    onCreate: (name: string, pictureUrl: string) => void,
}

const animalSchema = z.object({
    name: z.string().regex(/^[a-zA-Z\s]+$/, {message: 'Invalid name format'}),
    pictureUrl: z.string().max(200),
});

export const AnimalCreateForm = ({onCreate}: AnimalCreateFormProps) => {

    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');

    const nameInputRef = useRef<HTMLInputElement>(null);
    const pictureUrlInputRef = useRef<HTMLInputElement>(null);

    const handleCreateInput = (name: string, pictureUrl: string) => {

        try {
            const validatedData = animalSchema.parse({name, pictureUrl});
            onCreate(validatedData.name, validatedData.pictureUrl);
            clearInputFields()
        } catch (error) {
            console.error('Failed to validate input data ', error);
        }
        onCreate(name, pictureUrl);
    }

    const clearInputFields = () => {
        if (nameInputRef.current) {
            nameInputRef.current.value = '';
        }

        if (pictureUrlInputRef.current) {
            pictureUrlInputRef.current.value = '';
        }
    }

    return (
        <form className={styles.container}>
            <label className={styles.label}>
                Animal Name
                <input
                    className={styles.input}
                    type="text"
                    onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}
                    maxLength={30}
                />
            </label>

            <label className={styles.label}>
                Animal picture URL
                <input
                    className={styles.input}
                    type="text"
                    onChange={(e) => {
                        setPictureUrl(e.currentTarget.value)
                    }}
                    maxLength={200}
                />
            </label>

            <div className={styles.buttonWrapper}>
                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCreateInput(name, pictureUrl);
                    }}
                >
                    Create Animal
                </button>
            </div>
        </form>
    );
};

