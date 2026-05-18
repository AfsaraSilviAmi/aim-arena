import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const FacilityCard = ({facility}) => {
    return (
        <div>
            <Card>
                <Image src={facility.imageUrl} alt={facility.facilityName} width={100} height={100}></Image>
            </Card>
        </div>
    );
};

export default FacilityCard;