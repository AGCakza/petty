import React from 'react'
import styles from './PetThumb.module.sass'
import { FEPet } from '@/helpers/types'
import Image from 'next/image'

interface IPetThumb {
    style?: 'mini' | 'nobackground' | 'default' | 'big'
    pet: FEPet
}

const PetThumb: React.FC<IPetThumb> = ({
    style = 'default',
    pet
}) => {

    return (
        <div className={`${styles.root} ${styles[style]}`}>
            <div className={styles.avatar}>
                <Image style={{objectFit: 'cover'}} fill src={pet.avatar ? process.env.NEXT_PUBLIC_URL + pet.avatar : '/icons/pet.svg'} alt={pet.name || 'Pet'} />
            </div>
            {style !== 'mini' && <div className={styles.info}>
                <p className={styles.name}>{pet.name}</p>
                <div>
                    <p>{pet.age} months</p>
                    <div className={styles.divider} />
                    <p>{pet.type}</p>
                </div>
            </div>}
        </div>
    )
}

export default PetThumb