import Image from 'next/image';
import React from 'react';
import DeleteButton from '@/components/DeleteButton';

const ManageFacilityCard = ({facility}) => {
    return (
        <div>
            <Image src={facility.imageUrl} alt={facility.facilityName} width={100} height={100}></Image>
            <div>
                <p>{facility.facilityName}</p>
            </div>
             <DeleteButton facilityId={facility._id}></DeleteButton>
        </div>
    );
};

export default ManageFacilityCard;