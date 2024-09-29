export const supplierPrimaryFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true
  },
  {
    name: 'description',
    label: 'Description',
    type: 'text',
    required: false
  },
  {
    name: 'address.cep',
    label: 'CEP',
    type: 'text',
    required: true
  },
  {
    name: 'address.state',
    label: 'State',
    type: 'text',
    required: true
  },
  {
    name: 'address.city',
    label: 'City',
    type: 'text',
    required: true
  },
  {
    name: 'address.street',
    label: 'Street',
    type: 'text',
    required: true
  },
  {
    name: 'address.number',
    label: 'Number',
    type: 'number',
    required: true
  },
  {
    name: 'address.reference',
    label: 'Reference',
    type: 'text',
    required: false
  }
];

export const supplierContactFields = [
  {
    name: 'contact.name',
    label: 'Contact Name',
    type: 'text',
    required: true
  },
  {
    name: 'contact.phone',
    label: 'Contact Phone',
    type: 'text',
    required: true
  }
];
