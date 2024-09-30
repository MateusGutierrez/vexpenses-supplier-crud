import React, { useCallback } from 'react';
import { ButtonUI } from '../../components/buttons/style';
import { GrMapLocation } from 'react-icons/gr';

interface Address {
  street: string;
  number: number;
  city: string;
  state: string;
}

interface Props {
  address: Address;
}

export const OpenMapButton: React.FC<Props> = ({ address }) => {
  const openMap = useCallback(() => {
    const fullAddress = `${address.street}, ${address.number}, ${address.city}, ${address.state}`;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
    window.open(mapUrl, '_blank');
  }, [address]);

  return (
    <ButtonUI onClick={openMap}>
      <GrMapLocation />
    </ButtonUI>
  );
};
